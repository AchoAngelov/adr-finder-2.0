import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import NavigationBar from '../NavigationBar'
import classes from './Layout.module.scss'

function Layout({ children }) {
  return (
    <Box className={classes.pageContent}>
      <NavigationBar />
      <Container
        sx={{
          my: 5,
        }}
        maxWidth="sm"
      >
        {children}
      </Container>
    </Box>
  )
}

export default Layout
