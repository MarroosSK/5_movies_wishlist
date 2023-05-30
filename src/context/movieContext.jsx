import PropType from "prop-types";
import { useState, createContext, useEffect } from "react";

export const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  //snack-bar
  const [open, setOpen] = useState(false);
  const [movieAdded, setMovieAdded] = useState(false);
  const [term, setTerm] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [favList, setFavList] = useState(
    JSON.parse(localStorage.getItem("movie-favourites")) || []
  );

  const handleAddToFav = (movie) => {
    if (!favList.includes(movie)) {
        setFavList([...favList, movie]);
        setOpen(true);
        setMovieAdded(true);
      } else {
        setOpen(true);
        setMovieAdded(false);
      }
    localStorage.setItem("movie-favourites", JSON.stringify(favList));
  };

  const handleRemoveFav = (movie) => {
    const newFavList = favList.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
      );
      
      setOpen(true)
      setFavList(newFavList);
    localStorage.setItem("movie-favourites", JSON.stringify(newFavList));
  };


  useEffect(() => {
    localStorage.setItem("movie-favourites", JSON.stringify(favList));
  }, [favList]);

  return (
    <MovieContext.Provider
      value={{
        movieAdded, 
        setMovieAdded,
        open,
        setOpen,
        term,
        setTerm,
        movieList,
        setMovieList,
        favList,
        handleAddToFav,
        handleRemoveFav,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

MovieContextProvider.propTypes = {
  children: PropType.node.isRequired,
};
