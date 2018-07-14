import React from 'react'
import { NavLink } from 'react-router-dom'

const ListOfFriendsItem = ({id, name}) => (
  <NavLink to={`/${id}`}>{name}</NavLink>
)

export default ListOfFriendsItem