
const sortToString = (sortBy = []) => {
  return sortBy.length
    ? `${sortBy[0].desc ? '-' : ''}${sortBy[0].id}` 
    : ''
}

export default sortToString
