import React, { Component } from 'react'
import { connect } from 'react-redux'
import _get from 'lodash.get'
import { ChatItem } from './../components'

class ChatHistory extends Component {
  render() {
    const messages = _get(this, 'props.messages', [])
    const currentChatId = _get(this, 'props.currentChat.id')
    const messagesFiltered = messages.filter(message => message.id === currentChatId)

    return(
      <div>
        Histórico da conversa
        <ul>
          {messagesFiltered.map((message, index) => (
            <ChatItem key={index} {...message} />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({currentChat, messages}, props) => {
  return {
    currentChat,
    messages,
    ...props,
  }
}


export default connect(mapStateToProps)(ChatHistory)