import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListOfFriends } from './../components'

class ListOfFriends_ extends Component {

  render() {
    const { friends } = this.props
    const { id: currentID } = this.props.currentChat
    return <ListOfFriends currentID={currentID} friends={friends} />
  }
}

const mapStateToProps = ({friends, currentChat}, props) => {
  return {
    friends,
    currentChat,
    ...props
  }
}

export default connect(mapStateToProps)(ListOfFriends_)
