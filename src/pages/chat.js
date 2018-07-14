import React, { Component } from 'react'
import { AppWrapper } from './../components'
import { ChatViewer } from './../containers'

class Chat extends Component {

  componentDidMount = () => {
    console.log('month page')
  }

  render() {
    return(
      <AppWrapper>
        <ChatViewer />
      </AppWrapper>
    )
  }
}

export default Chat