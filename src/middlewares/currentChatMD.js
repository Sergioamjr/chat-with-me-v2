import _get from 'lodash.get'

export const appendName = store => next => action => {
  if(action.type === 'UPDATE_CURRENT_CHAT') {
    const friends = _get(store.getState(), 'friends', [])
    const id = _get(action, 'payload.id')
    const friendWithName = friends.filter(friend => friend.id === id)
    const [newPayload] = [...friendWithName]

    return next({...action, payload: newPayload})
  }
  next(action)
}