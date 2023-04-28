import { useState } from 'react'
import SearchBar from '../components/SearchBar'

const Home = () => {
  const [searchValue, setSearchValue] = useState()

  return <SearchBar setSearchValue={setSearchValue} />
}

export default Home
