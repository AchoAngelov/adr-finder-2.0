import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const Adr = () => {
  return (
    <Card sx={{ minWidth: 300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Adr name
        </Typography>
        <Typography variant="h5" component="div">
          UN code: 1233
        </Typography>
        <Typography sx={{ my: 1.5 }} color="text.secondary">
          Label
        </Typography>
        <Typography variant="body2">description</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default Adr
