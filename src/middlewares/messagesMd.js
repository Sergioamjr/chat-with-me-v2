import _get from 'lodash.get'
import { defineWhoSendMessage } from './../utils'

export const appendMessageDetails = store => next => action => {
  const userName = _get(store.getState(), 'user.name')
  const { id, name: friendName } = _get(store.getState(), 'currentChat')
  const messagesHistory = _get(store.getState(), 'messages', [])
  const messagesFiltered = messagesHistory.filter(message => message.id === id)
  const name = defineWhoSendMessage(userName, friendName, messagesFiltered)


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