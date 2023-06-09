import axios from 'axios'

export const fetchAdrData = async (searchParam) => {
  try {
    const response = await axios.get('/api/adrs', {
      params: { search: searchParam },
    })
    const data = response.data
    return data
  } catch (error) {
    console.error(error)
    return []
  }
}

export const fetchSingleAdrData = async (searchParam) => {
  try {
    if (searchParam?.length === 4) {
      const response = await axios.get('/api/adrs', {
        params: { search: searchParam },
      })
      const [
        {
          substances: [data],
        },
      ] = response.data
      return data
    }
    return
  } catch (error) {
    console.error(error)
    return []
  }
}
