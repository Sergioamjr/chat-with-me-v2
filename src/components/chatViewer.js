import React from 'react'
import { ChatHistory, ChatInput } from './../containers'

const ChatViewer = ({name = ''}) => (
  <div>
    <p>Conversando com {name}</p>
    <ChatHistory />
    <ChatInput />
  </div>
)

export default ChatViewer