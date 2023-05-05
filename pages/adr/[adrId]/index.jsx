import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Image from 'next/image'
import { useRouter } from 'next/router'

import adrTableBg from '../images/adr-table-bg.png'
import classes from './AdrDetailsPage.module.scss'

const AdrDetailsPage = () => {
  console.log(adrTableBg)
  const {
    query: { adrId },
  } = useRouter()
  return (
    <Card>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            sx={{
              textAlign: 'right',
            }}
          >
            Name:
          </Grid>
          <Grid item xs={6}>
            Benzin
          </Grid>
          <Grid
            xs={12}
            sx={{
              textAlign: 'center',
            }}
          >
            No
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              textAlign: 'center',
            }}
          >
            <Box className={classes.adrTable}>
              <Box className={classes.adrTableNo}>33</Box>
              <Box className={classes.adrTableNo}>1203</Box>
              <Image
                height={200}
                src={adrTableBg}
                alt="Picture of the author"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              textAlign: 'center',
            }}
          >
            Labels
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              textAlign: 'center',
            }}
          >
            <Image
              src="/images/adr_3.png"
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </Grid>
          <Grid
            className={classes.description}
            item
            sm={6}
            xs={12}
            sx={{
              textAlign: 'right',
            }}
          >
            Description:
          </Grid>
          <Grid className={classes.description} item sm={6} xs={12}>
            Some Description
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default AdrDetailsPage
