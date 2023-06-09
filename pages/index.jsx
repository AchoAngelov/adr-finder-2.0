import { useEffect, useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

import SearchBar from '../components/SearchBar'
import { fetchAdrData } from '../services/adrService'

const Home = () => {
  const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [adrData, setAdrData] = useState([])

  useEffect(() => {
    setLoading(true)
    const fetchDataAndSetData = async () => {
      if (searchValue.length === '') {
        setAdrData([])
        return
      }
      const data = await fetchAdrData(searchValue)
      setAdrData(data)
      setLoading(false)
    }

    fetchDataAndSetData()
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
