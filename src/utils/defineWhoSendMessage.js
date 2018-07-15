const defineWhoSendMessage = (userName, friendName, messages) => {
  if(!userName || !friendName) return false

  const messagesCount = messages.length
  const lastMessageName = messages[messagesCount - 1] ? messages[messagesCount - 1].name : false
  const penultMessageName = messages[messagesCount - 2] ? messages[messagesCount - 2].name : false
  const antePenultMessageName = messages[messagesCount - 3] ? messages[messagesCount - 3].name : false

  if(messagesCount <= 1) {
    return userName
  }

  if(messagesCount === 2) {
    return friendName
  }

  if(lastMessageName === penultMessageName) {
    return antePenultMessageName
  }

  if(lastMessageName !== penultMessageName) {
    return lastMessageName
  }

  return lastMessageName
}

export default defineWhoSendMessage
