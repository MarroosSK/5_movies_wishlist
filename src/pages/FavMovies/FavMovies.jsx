import  { useContext } from 'react'
import { Alert, Button, Card, CardContent, CardMedia, Grid, Snackbar, Typography } from '@mui/material'
import { MovieContext } from '../../context/movieContext'
import RemoveIcon from '@mui/icons-material/Remove';

const FavMovies = () => {
  const {open, setOpen, favList, handleRemoveFav} = useContext(MovieContext)

  const showFavList = 
  favList.map(favM=>(
<Grid item xs={12} sm={6} md={4} lg={4} direction={"row"} key={favM.imdbID}>
    <Card key={favM.imdbID}         
    sx={{
          margin: "5px",
        }}>
    <div style={{flex: 1}}>
      <CardContent>
        <Typography variant='h5' sx={{
                                                  fontSize: {
                xs: "18px",
                sm: "22px",
                md: "25px",},
                height: "50px"
        }}>{favM.Title}</Typography>
      </CardContent>
    </div>
    <Button variant="outlined" color="error" sx={{marginBottom: "7px", width: "100%"}} onClick={() => handleRemoveFav(favM)}><RemoveIcon/> Remove</Button>
    <CardMedia 
        style={{width: "100%", height: "200px"}}
        image={favM.Poster}
        title={favM.Title}
    />
  </Card>
      {/* SnackBar */}
      <Snackbar
      open={open}
      autoHideDuration={500}
      onClose={() => setOpen(false)}
    >
      <Alert
        severity="success"
        sx={{ width: "100%" }}
      >
        Movie has been removed from the list!
      </Alert>
    </Snackbar>
</Grid>
  ))

  return (
    <>
      {
        favList.length >= 1 ? showFavList : <Typography variant='h5' sx={{
                fontSize: {
                    xs: "18px",
                    sm: "22px",
                    md: "25px",
            },
            display: "flex",
            justifyContent: {
                xs: "center",
                sm: "start",
                md: "start",
                lg: "start"
            },
            alignItems: {
                xs: "center",
            },
            }}>List is empty...</Typography>
        
      }
    </>
  )
}

export default FavMovies