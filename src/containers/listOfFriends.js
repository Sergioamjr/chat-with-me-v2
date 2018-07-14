import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListOfFriendsItem } from './../components'

class ListOfFriends extends Component {

  render() {
    const { friends } = this.props
    const { id: currentID } = this.props.currentChat

    if(friends.length === 0 ) {
      return <p>Você não tem nenhum amigo :(</p>
    }

    return(
      <ul>
        {friends.map(friend => (
          <ListOfFriendsItem currentID={currentID} key={friend.id} {...friend} />
        ))}
      </ul>
    )
  }
}

const mapStateToProps = ({friends, currentChat}, props) => {
  return {
    friends,
    currentChat,
    ...props
  }
}

export default connect(mapStateToProps)(ListOfFriends)
