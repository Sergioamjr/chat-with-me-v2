import * as AC from './../reducers/currentChat'

export const updateCurrentChatAction = (params) => {
  return {
    type: AC.UPDATE_CURRENT_CHAT,
    payload: params
  }
}