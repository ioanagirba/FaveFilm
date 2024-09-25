import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import MovieCardContent from "../../components/movie-card-content/MovieCardContent";
import { GET_MOVIES_BY_GENRE } from "../../utils/queries";
import { useMovies } from "../../contexts/movieContext";
import { Movie } from "../../utils/types";
import Dropdown from "../../components/dropdown/Dropdown";
import { useSearchContext } from "../../contexts/searchContext";
import {
  CardContentRecommandation,
  HomePageContainer,
  CardFilters,
  FilterContainer,
  HomePageComponents,
  LeftContainer,
  MainContainer,
  RightConatiner,
} from "./HomePage.styled";

const HomePage = () => {
  const { movies } = useMovies();
  const [displayedMovies, setDisplayedMovies] = useState<Movie[]>();
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  const [resetFilters, setResetFilters] = useState<boolean>(false);
  const navigate = useNavigate();

  const { results } = useSearchContext();

  const { refetch: refetchMoviesByGenre } = useQuery(GET_MOVIES_BY_GENRE, {
    skip: true,
  });

  useEffect(() => {
    if (results.length > 0) setDisplayedMovies(results);
  }, [results]);

  useEffect(() => {
    if (movies) setDisplayedMovies(movies);
  }, [movies]);

  const handleAddFilter = async (genre: string) => {
    setResetFilters(false);

    if (!genre) return;

    try {
      const { data: filteredMoviesData } = await refetchMoviesByGenre({
        genre: genre,
      });
      if (filteredMoviesData) {
        setDisplayedMovies(filteredMoviesData.movieQuery.moviesByGenre);
      }
    } catch (error) {
      console.error("Error fetching movies by genre:", error);
    }
  };

  const handleDeleteFilters = () => {
    setDisplayedMovies(movies);
    setResetFilters(true);
  };

  const generateRecommendations = () => {
    if (movies.length < 2) {
      return;
    }

    const randomIndices: number[] = [];
    while (randomIndices.length < 2) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    const randomMovies = randomIndices.map((index) => movies[index]);
    setRecommendations(randomMovies);
  };

  useEffect(() => {
    generateRecommendations();
  }, [movies]);

  return (
    <HomePageContainer>
      <HomePageComponents>
        <LeftContainer>
          <FilterContainer>
            <Card variant="none">
              <CardFilters>
                <h2>Filters</h2>
                <Dropdown addFilter={handleAddFilter} reset={resetFilters} />
                <Button type="secondary" onClickFunction={handleDeleteFilters}>
                  Delete Filters
                </Button>
              </CardFilters>
            </Card>
          </FilterContainer>

          <MainContainer>
            {displayedMovies &&
              displayedMovies.map((movie: Movie) => (
                <MovieCardContent
                  key={movie.id}
                  movieId={movie.id}
                  picture={movie.imagesUrls[0]}
                  title={movie.title}
                  description={movie.description}
                  isHomePage={true}
                />
              ))}
          </MainContainer>
        </LeftContainer>

        <RightConatiner>
          <h2>Recommended Picks</h2>
          {recommendations &&
            recommendations.slice(0, 2).map((movie: Movie) => (
              <Card
                key={movie.id}
                onClick={() => navigate(`/movies/${movie.id}`)}
                variant="collection"
              >
                <CardContentRecommandation>
                  <img src={movie.imagesUrls[0]} alt="movie-image" />
                  <p>{movie.description}</p>
                </CardContentRecommandation>
              </Card>
            ))}
        </RightConatiner>
      </HomePageComponents>
    </HomePageContainer>
  );
};

export default HomePage;
