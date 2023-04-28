import { useRouter } from 'next/router'
import Link from 'next/link'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const NavigationBar = () => {
  const router = useRouter()

  const handleBackClick = () => {
    router.back()
  }

  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          {router.pathname !== '/' && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="back"
              onClick={handleBackClick}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography variant="h6">ADR Finder</Typography>
          <Box sx={{ ml: 'auto' }}>
            <Link href="/classes" passHref>
              <Button color="inherit" sx={{ textTransform: 'capitalize' }}>
                Dangerous Goods
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavigationBar
