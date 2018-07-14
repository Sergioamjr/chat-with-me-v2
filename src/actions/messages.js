import * as TYPE from './../reducers/messages'

export const addNewMessageAction = (payload) => {
  return {
    type: TYPE.ADD_MESSAGE,
    payload,
  }
}