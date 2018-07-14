import { combineReducers } from 'redux'
import { default as friends } from './friends'
import { default as messages } from './messages'
import { default as user } from './user'
import { default as currentChat } from './currentChat'

const rootReducer = combineReducers({
  friends,
  messages,
  user,
  currentChat,
})

export default rootReducer
