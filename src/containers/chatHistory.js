import React, { Component } from 'react'
import { connect } from 'react-redux'
import _get from 'lodash.get'
import { ChatHistory } from './../components'

class ChatHistory_ extends Component {
  render() {
    const messages = _get(this, 'props.messages', [])
    const currentChatId = _get(this, 'props.currentChat.id')
    const messagesFiltered = messages.filter(message => message.id === currentChatId)

    return(
      <ChatHistory messages={messagesFiltered} />
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


export default connect(mapStateToProps)(ChatHistory_)