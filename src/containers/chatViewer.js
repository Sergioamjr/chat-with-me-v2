import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { updateCurrentChatAction } from './../actions'
import { connect } from 'react-redux'
import { ChatHistory, ChatInput } from './'
import { isValidPath } from './../utils'

class ChatViewer extends Component {

  componentWillMount = () => {
    const { friends, match: { params: { id } }} = this.props
    const isValid = isValidPath(id, friends)
    !isValid && this.redictToHome()
  }

  componentDidMount = () => {
    const { match: { params }} = this.props
    this.updateCurrentChat(params)
  }

  redictToHome = () => {
    return this.props.history.push('./')
  }

  updateCurrentChat = (params) => {
    this.props.dispatch(updateCurrentChatAction({...params}))
  }

  shouldComponentUpdate = (nextProps) => {
    const { friends, match: { params: nextParams }} = nextProps
    const { id: nextID } = nextParams
    const { match: { params: prevParams }} = this.props
    if(prevParams !== nextParams) {
      const isValid = isValidPath(nextID, friends)
      if(isValid) {
        this.updateCurrentChat(nextParams)
      } else {
        this.redictToHome()
      }
    }
    return true
  }

  render() {
    const { name } = this.props.currentChat
    return(
      <div>
        Conversando com {name}
        <ChatHistory/>
        <ChatInput />
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