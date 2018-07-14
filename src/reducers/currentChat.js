import defaultStore from './../store/DefaultStore'
const { currentChat } = defaultStore

export const UPDATE_CURRENT_CHAT = 'UPDATE_CURRENT_CHAT'

export default function currentChatReducer(state = currentChat, action) {
  switch(action.type) {
    case UPDATE_CURRENT_CHAT:
    console.log('UPDATE_CURRENT_CHAT', action.payload)
      return { ...state, ...action.payload}
    default:
      return state
  }
}
