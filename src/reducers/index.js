import { combineReducers } from 'redux'
import { default as friends } from './friends'
import { default as messages } from './messages'
import { default as user } from './user'

const rootReducer = combineReducers({
  friends,
  messages,
  user,
})

export default rootReducer
