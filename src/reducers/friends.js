import defaultStore from './../store/DefaultStore'
const { friends } = defaultStore

export const ADD_FRIEND = 'ADD_FRIEND'

export default function friendsReducer(state = friends, action) {
  switch(action.type) {
    case ADD_FRIEND:
      return state.concat([action.payload])
    default:
      return state
  }
}
