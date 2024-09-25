import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Movie } from "../../src/utils/types";
import { GET_MOVIES } from "../utils/queries";

export interface MovieContextType {
  movies: Movie[];
}

const MovieContext = createContext<MovieContextType>({ movies: [] });

export const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const { data: dataMovie } = useQuery(GET_MOVIES);

  useEffect(() => {
    if (!dataMovie) return;
    const movies: Movie[] = dataMovie.movieQuery.movies;
    setMovies(movies);
  }, [dataMovie]);

  return (
    <MovieContext.Provider value={{ movies }}>{children}</MovieContext.Provider>
  );
};
