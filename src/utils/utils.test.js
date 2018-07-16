import { isValidPath, defineWhoSendMessage } from './'

describe('Utils', () => {
  it('Should return true', () => {
    expect(true).toBe(true)
  })

  describe('isValidPath.js', () => {
    it('should return false when without paramers', () => {
      const result = isValidPath()
      expect(result).toBeFalsy()
    })

    it('should return true when is a valid path', () => {
      const currentID = 123
      const friends = [{id: 123}, {id: 345}]
      const result = isValidPath(currentID, friends)
      expect(result).toBeTruthy()
    })
  })

  describe('defineWhoSendMessage.js', () => {
    it('should return false when has no params', () => {
      const result = defineWhoSendMessage()
      expect(result).toBeFalsy()
    })

    it('should return true when is a valid message and users', () => {
      const
        userName = 'João',
        friendName = 'Jaime',
        messages = [{name: 'João'}, {name: 'Jaime'}, {name: 'João'}]

      const result = defineWhoSendMessage(userName, friendName, messages)
      expect(result).toBe(userName)
    })
  })
})