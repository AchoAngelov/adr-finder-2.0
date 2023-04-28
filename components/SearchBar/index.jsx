import { useRef } from 'react'
import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = ({ setSearchValue }) => {
  const inputRef = useRef(null)

  const onChangeHandler = () => {
    setSearchValue(inputRef.current.value)
  }

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <InputBase
        onChange={onChangeHandler}
        inputRef={inputRef}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter UN"
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

SearchBar.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
}

export default SearchBar
