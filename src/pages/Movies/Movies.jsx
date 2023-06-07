import { useContext } from "react";
import AddIcon from '@mui/icons-material/Add';
import {
  Alert,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { MovieContext } from "../../context/movieContext";

const Movies = () => {
  const {
    open,
    setOpen,
    movieAdded,
    movieList,
    handleAddToFav,
  } = useContext(MovieContext);
  

  const showMovies = movieList.map((movie) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={4}
      direction={"row"}
      key={movie.imdbID}
    >
      <Card
        onClick={() => handleAddToFav(movie)}
        key={movie.imdbID}
        sx={{
          display: "flex",
          border: "1px",
          margin: "5px",
          backgroundColor: "#ada180",
          transition: "0.3s ease-in-out",
          ":hover": {
            cursor: "pointer",
            backgroundColor: "#17cc00"
          }
        }}
      >
        <div style={{ flex: 1 }}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: "14px",
                },
              }}
            >
              {movie.Title}
            </Typography>
            <Stack>
              <Typography>({movie.Year})</Typography>
            </Stack>
          </CardContent>
        </div>
        <CardMedia
          style={{ width: "150px", height: "250px" }}
          image={movie.Poster}
          title={movie.Title}
        />
      </Card>
    {/* SnackBar */}
    <Snackbar
      open={open}
      autoHideDuration={500}
      onClose={() => setOpen(false)}
    >
      <Alert
        severity={movieAdded ? "success" : "error"}
        sx={{ width: "100%" }}
      >
        {movieAdded
          ? "Movie has been added to the list!"
          : "Movie is already on the list!"}
      </Alert>
    </Snackbar>
    </Grid>
  ));

  return (
    <>
      {movieList.length >= 1 ? (
        showMovies
      ) : (
        <Typography
          variant="h5"
          sx={{
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
              lg: "start",
            },
            alignItems: {
              xs: "center",
            },
            backgroundColor: "transparent"
          }}
        >
          Search a movie...
        </Typography>
      )}
    </>
  );
};

export default Movies;
