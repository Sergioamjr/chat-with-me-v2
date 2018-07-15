const isValidPath = (currentID, friends = []) => {
  if(!currentID || friends.length === 0) return false

 return  friends.filter(friend => friend.id === currentID).length > 0
}

export default isValidPath