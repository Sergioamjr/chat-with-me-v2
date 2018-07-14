import * as TYPE from './../reducers/currentChat'

export const updateCurrentChatAction = (params) => {
  return {
    type: TYPE.UPDATE_CURRENT_CHAT,
    payload: params
  }
}