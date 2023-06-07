import  { useContext } from "react";
import PropType from "prop-types"
import axios from "axios"
import {Box, InputAdornment, IconButton, Stack, TextField, Typography} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { MovieContext } from "../../context/movieContext";



const Search = ({apiKey}) => {
    const {term, setTerm, setMovieList} = useContext(MovieContext)

    const URL = `https://www.omdbapi.com?s=${term}&apikey=${apiKey}`



    const fetchMovie = async () =>{
      const res = await axios.get(URL)
      const movieData = await res.data
  
      if (!term.trim()) {
        alert("Please enter a movie title");
        return;
      }

      if(movieData){
        setMovieList(movieData.Search)
        setTerm("")
      } 
    
    }


  return (
    <Box 
        sx={{
            display: "flex",
            flexDirection: {
                xs: "column",
                sm: "row",
                md: "row"
            },
            justifyContent: {
                xs: "center",
                sm: "space-between",
                md: "space-between"
            },
            alignItems: {
                xs: "center",

            }
        }}
    >
        <Typography variant='h2' sx={
            {
                fontSize: {
                    xs: "35px",
                    sm: "42px",
                    md: "50px",
            }
            }}>Movie<span style={{color: "red", textDecoration: "underline"}}>Wish</span></Typography>
        <Stack
            direction="row"
            alignContent="center"
        >
            <TextField sx={{color: "white"}} required type='text' placeholder='Find...' value={term} onChange={(e) => setTerm(e.target.value)} 
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton disableRipple disableFocusRipple onClick = {fetchMovie}>
                            <SearchIcon color='info'/>
                          </IconButton>
                        </InputAdornment>
                      )
                }}
            />
        </Stack>
    </Box>
  )
}

Search.propTypes = {
    apiKey: PropType.string.isRequired
}

export default Search