import { useState } from 'react'
import './App.css'
//MUI
import {Container} from "@mui/system"
import { Grid, Stack, Typography } from '@mui/material'
import Search from './components/Search/Search'
import FavMovies from './pages/FavMovies/FavMovies'
import Movies from './pages/Movies/Movies'

function App() {
  const [switchPage, setSwitchPage] = useState(false)
  const API_KEY = import.meta.env.VITE_API_KEY


  return (
    <div style={{marginTop: "2rem"}}>
      <Container maxWidth="md">
        <Search apiKey={API_KEY}/>
        <Stack spacing={2} direction={"row"} sx={{
            display: "flex",
            justifyContent: {
                xs: "center",
                sm: "start",
                md: "start"
            },
            alignItems: {
                xs: "center",
            },
            marginTop: "2rem"
        }}>
          <Typography variant='h2' sx={{
            cursor: "pointer",
                fontSize: {
                    xs: "18px",
                    sm: "22px",
                    md: "27px",
            },
            ":hover": {
            color: 'blue',
        },
          }} onClick={() => setSwitchPage(false)} color={switchPage ? "": "blue"}>Movies</Typography>  
          <Typography variant='h2' sx={{
                cursor: "pointer",
                fontSize: {
                    xs: "18px",
                    sm: "22px",
                    md: "27px",
            },
            ":hover": {
            color: 'blue',
        },
          }}  onClick={() => setSwitchPage(true)} color={switchPage ? "blue": ""}>Favorite Movies</Typography>
        </Stack>
        <Grid container sx={{
          marginTop: "5rem",
        }}>
          {
            switchPage ? <FavMovies /> : <Movies />
          }
        </Grid>
      </Container>
    </div>
  )
}

export default App
