import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { updateCurrentChatAction } from './../actions'
import { connect } from 'react-redux'
import { ChatHistory } from './'

class ChatViewer extends Component {

  updateCurrentChat = (params) => {
    this.props.dispatch(updateCurrentChatAction({...params}))
  }

  shouldComponentUpdate = (nextProps) => {
    const { match: { params: nextParams }} = nextProps
    const { match: { params: prevParams }} = this.props
    if(prevParams !== nextParams) {
      this.updateCurrentChat(nextParams)
    }
    return true
  }

  render() {
    const { name } = this.props.currentChat
    return(
      <div>
        Conversando com {name}
        <ChatHistory/>
      </div>
    )
  }
}

const mapStateToProps = ({currentChat, friends}, props) => {
  return {
    currentChat,
    friends,
    ...props,
  }
}

export default withRouter(connect(mapStateToProps)(ChatViewer))