import React from 'react'
import { ListOfFriendsItem } from './'

const ListOfFriends = ({friends = [], currentID}) => {
  if(friends.length === 0) {
    return <p>Você não tem nenhum amigo :(</p>
  }

  return(
    <ul>
      {friends.map(friend => <ListOfFriendsItem key={friend.id} currentID={currentID} {...friend} />)}
    </ul>
  )
}


export default ListOfFriends
