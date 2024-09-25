import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import StarIcon from "@mui/icons-material/Star";
import Card from "../../components/card/Card";
import { FRENCH_MAUVE } from "../../utils/Variables";
import {
  getReviews,
  calculateAverageRating,
} from "../../pages/movie/movie-functions";
import { GET_REVIEW_BY_MOVIE_ID } from "../../utils/queries";
import { Review } from "../../utils/types";
import {
  DeleteMovieButton,
  MovieCardWatchList,
  MovieDetailsDescription,
  MovieDetailsLeft,
  MovieDetailsRight,
  MovieDetailsTitle,
  MoviePicture,
  Rating,
  Score,
} from "./MovieCardContent.styled";

interface MovieCardContentProps {
  picture: string;
  title: string;
  description: string;
  handleButton?: () => void;
  movieId: number;
  isHomePage: boolean;
}

function MovieCardContent({
  picture,
  title,
  description,
  handleButton,
  movieId,
  isHomePage,
}: MovieCardContentProps) {
  const navigate = useNavigate();

  const { data: dataReview } = useQuery(GET_REVIEW_BY_MOVIE_ID(movieId));

  if (!dataReview) return null;
  const reviews: Review[] = dataReview.reviewQuery.reviewMovie;

  const navigateToMovie = (id: number) => {
    if (id) {
      navigate(`/movies/${id}`);
    }
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (handleButton) {
      handleButton();
    }
  };

  return (
    <Card onClick={() => navigateToMovie(movieId)} variant="collection">
      <MovieCardWatchList>
        <MovieDetailsLeft isHomePage={isHomePage}>
          <MoviePicture src={picture} />
          <div>
            <MovieDetailsTitle>{title}</MovieDetailsTitle>
            <MovieDetailsDescription>{description}</MovieDetailsDescription>
          </div>
        </MovieDetailsLeft>

        <MovieDetailsRight>
          <Rating>
            <StarIcon sx={{ color: FRENCH_MAUVE }} />
            <Score>{calculateAverageRating(getReviews(reviews))} / 5</Score>
          </Rating>

          {!isHomePage && (
            <DeleteMovieButton onClick={handleDelete}>
              Delete from watchlist
            </DeleteMovieButton>
          )}
        </MovieDetailsRight>
      </MovieCardWatchList>
    </Card>
  );
}

export default MovieCardContent;
