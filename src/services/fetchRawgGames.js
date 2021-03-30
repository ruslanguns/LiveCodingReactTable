

const fetchRawgGames = async (page = 1, pageSize = 6, sort = '', search = '') => {
  const url = new URL('https://api.rawg.io/api/games')

  url.searchParams.append('key', '4554de84a7fa49fa873994e05dd10b2d')
  page && url.searchParams.append('page', page)
  pageSize && url.searchParams.append('page_size', pageSize)
  search && url.searchParams.append('search', search) 
  sort && url.searchParams.append('ordering', sort) 
  
  const response = await fetch(url)
  return response.json()
}

export default fetchRawgGames