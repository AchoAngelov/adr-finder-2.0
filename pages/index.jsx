import { useEffect, useState } from 'react'
import axios from 'axios'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

import SearchBar from '../components/SearchBar'

const Home = () => {
  const [searchValue, setSearchValue] = useState('')
  const [adrData, setAdrData] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/adrs', {
        params: { search: searchValue },
      })
      const data = response.data
      setAdrData(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (searchValue === '') {
      setAdrData([])
      return
    }
    fetchData()
  }, [searchValue])

  return (
    <>
      <SearchBar setSearchValue={setSearchValue} />
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          m: '40px auto',
        }}
        aria-label="contacts"
      >
        {searchValue ? (
          adrData.length !== 0 ? (
            adrData.map((item) =>
              item.substances.map((substance) => (
                <ListItem disablePadding key={substance.UN}>
                  <ListItemButton>
                    <ListItemText inset primary={substance.substanceName.bg} />
                  </ListItemButton>
                </ListItem>
              )),
            )
          ) : (
            <ListItem disablePadding>
              <ListItemText inset primary={'No data'} />
            </ListItem>
          )
        ) : (
          <ListItem disablePadding>
            <ListItemText inset primary={'Search for ADR'} />
          </ListItem>
        )}
      </List>
    </>
  )
}

export default Home
