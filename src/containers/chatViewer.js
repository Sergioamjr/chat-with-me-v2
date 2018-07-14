import React, { Component } from 'react'
import { withRouter } from 'react-router'

class ChatViewer extends Component {

  updateCurrentChat = (params) => {
    console.log('update chat', params)
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
    // console.log('this', this.props)
    return(
      <div>
        Conversando com tal amigo
      </div>
    )
  }
}

export default withRouter(ChatViewer)