import { useQuery, useMutation } from "@apollo/client";
import MovieCardContent from "../../components/movie-card-content/MovieCardContent";
import { useAuth } from "../../contexts/authContext";
import { Movie } from "../../utils/types";
import {
  GET_USER_BY_ID,
  DELETE_MOVIE_FROM_WATCHLIST,
} from "../../utils/queries";
import {
  WatchListContainer,
  WatchListMovieCollectionContainer,
  WatchListTitle,
} from "./WatchListPage.styled";
import { useEffect } from "react";

const WatchListPage = () => {
  const { userData } = useAuth();

  const [deleteMovie] = useMutation(DELETE_MOVIE_FROM_WATCHLIST, {
    refetchQueries: [GET_USER_BY_ID(userData?.userId ?? 0)],
  });

  const handleDelete = (movieId: number) => {
    deleteMovie({
      variables: {
        userId: userData?.userId,
        movieId: movieId,
      },
    });
  };

  const { data: dataAdded, refetch } = useQuery(
    GET_USER_BY_ID(userData?.userId ?? 0)
  );

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <WatchListContainer>
        <WatchListTitle>WATCHLIST</WatchListTitle>
        <WatchListMovieCollectionContainer>
          {dataAdded &&
            dataAdded?.userQuery?.user?.watchedList?.map((movie: Movie) => (
              <MovieCardContent
                key={movie.id}
                picture={movie.imagesUrls[0]}
                title={movie.title}
                description={movie.description}
                handleButton={() => handleDelete(movie.id)}
                movieId={movie.id}
                isHomePage={false}
              />
            ))}
        </WatchListMovieCollectionContainer>
      </WatchListContainer>
    </>
  );
};

export default WatchListPage;
