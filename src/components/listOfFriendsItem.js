import React from 'react'
import { NavLink } from 'react-router-dom'

const ListOfFriendsItem = ({id, name, currentID}) => {
  return(
    <NavLink className={id === currentID ? 'blocked-link db' : 'db'} to={`/${id}`}>{name}</NavLink>
  )
}

export default ListOfFriendsItem