import React from 'react'
import { NavLink } from 'react-router-dom'

const ListOfFriendsItem = ({id, name, onClick}) => (
  <NavLink onClick={onClick} to={`/${id}`}>{name}</NavLink>
)

export default ListOfFriendsItem