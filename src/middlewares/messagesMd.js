import _get from 'lodash.get'

export const appendMessageDetails = store => next => action => {
  const userName = _get(store.getState(), 'user.name')
  const { id, name: friendName } = _get(store.getState(), 'currentChat')
  const messagesHistory = _get(store.getState(), 'messages', [])
  const messagesFiltered = messagesHistory.filter(message => message.id === id)
  const messagesLength = messagesFiltered.length
  let name

  if(messagesLength === 0) {
    name = userName
  } else {
    const lastMessageName = messagesFiltered[messagesLength - 1].name
    name = lastMessageName === userName ? friendName : userName
  }

  if(action.type === 'ADD_MESSAGE') {
    const newPayload = {
      ...action.payload,
      sendByMe: name === userName,
      name,
    }

    return next({...action, payload: { ...newPayload }})
  }

  next(action)
}