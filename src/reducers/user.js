import defaultStore from './../store/DefaultStore'
const { user } = defaultStore

export const UPDATE_USER_INFO = 'UPDATE_USER_INFO'

export default function friendsReducer(state = user, action) {
  switch(action.type) {
    case UPDATE_USER_INFO:
      return { ...state, ...action.payload}
    default:
      return state
  }
}