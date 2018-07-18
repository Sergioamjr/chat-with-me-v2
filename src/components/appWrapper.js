import React, { Component } from 'react'
import { ListOfFriends } from './../containers'

class AppWrapper extends Component {
  render() {
    return(
      <div>
        <div><ListOfFriends /></div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default AppWrapper