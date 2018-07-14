import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListOfFriendsItem } from './../components'

class ListOfFriends extends Component {

  updateCurrentChatHandler = () => {
    console.log('change chat')
  }

  render() {
    const { friends } = this.props

    if(friends.length === 0 ) {
      return <p>Você não tem nenhum amigo :(</p>
    }

    return(
      <ul>
        {friends.map(friend => (
          <ListOfFriendsItem onClick={this.updateCurrentChatHandler} key={friend.id} {...friend} />
        ))}
      </ul>
    )
  }
}

const mapStateToProps = ({friends}, props) => {
  return {
    friends,
    ...props
  }
}

export default connect(mapStateToProps)(ListOfFriends)
