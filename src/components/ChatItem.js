import React from 'react'

const ChatItem = ({text, name}) => (
  <li>
    <span>De: {name}</span>
    <p>{text}</p>
  </li>
)

export default ChatItem
