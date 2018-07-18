import React from 'react'
import { ChatItem } from './'

const ChatHistory = ({messages = []}) => {
  return(
    <div>
      <p>Histórico da conversa</p>
      <ul>
        {messages.map((message, index) => (
          <ChatItem key={index} {...message} />
        ))}
      </ul>
  </div>
  )
}

export default ChatHistory
