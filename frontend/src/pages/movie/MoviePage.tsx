import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IconButton } from "@mui/material";
import { useQuery, useMutation } from "@apollo/client";
import { useAuth } from "../../contexts/authContext";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  Favorite,
  FavoriteBorder,
  Star,
} from "@mui/icons-material";
import { MovieDetailComponent } from "./components/MovieDetailComponent";
import { ReviewButton } from "./components/ReviewButton";
import {
  ADD_MOVIE_TO_WATCHLIST,
  GET_MOVIE_BY_ID,
  GET_REVIEW_BY_MOVIE_ID,
  GET_USER_BY_ID,
} from "../../utils/queries";
import {
  calculateAverageRating,
  getReviews,
  getReviewsUserId,
} from "./movie-functions";
import { Movie, Review } from "../../utils/types";
import * as pallete from "../../utils/Variables";
import {
  MovieContainer,
  MovieDescriptionContainer,
  MovieSectionContainer,
  MovieImagesContainer,
  MovieTitleContainer,
  MovieImageArrowsWrapper,
  MovieReviewSection,
  MovieTitle,
  MovieRating,
  MovieWrapper,
  MovieAddToWatchlist,
  MovieAddToWatchListWarpper,
} from "./Movie.styled";
import ReviewSection from "./components/ReviewSection";

const MoviePage: React.FC = () => {
  const { userData } = useAuth();
  const [currentImage, setCurrentImage] = useState(0);
  const [ratingsActive, setRatingsActive] = useState("true");
  const [commentsActive, setCommentsActive] = useState("false");
  const [isOnWatchedList, setIsOnWatchedList] = useState<boolean>(false);
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <div>No movie ID provided.</div>;
  }
  const parsedId = parseInt(id, 10);

  const { data: dataUser } = useQuery(GET_USER_BY_ID(userData?.userId ?? 0));
  const { data: dataMovie } = useQuery(GET_MOVIE_BY_ID(parsedId));
  const { data: dataReview } = useQuery(GET_REVIEW_BY_MOVIE_ID(parsedId));
  const [addToWatchlistMutation] = useMutation(
    ADD_MOVIE_TO_WATCHLIST(userData?.userId ?? 0, parsedId)
  );

  useEffect(() => {
    if (!dataUser) return;
    const watchedList: Movie[] = dataUser.userQuery.user.watchedList;
    const watchedListMovies: number[] = watchedList.map(
      (movie: Movie) => movie.id
    );
    const isMovieOnWatchedList: boolean = watchedListMovies.includes(parsedId);

    setIsOnWatchedList(isMovieOnWatchedList);
  }, [dataUser, parsedId]);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % movie.imagesUrls.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? movie.imagesUrls.length - 1 : prevIndex - 1
    );
  };

  const handleRatings = () => {
    setRatingsActive("true");
    setCommentsActive("false");
  };

  const handleComments = () => {
    setRatingsActive("false");
    setCommentsActive("true");
  };

  const handleAddToWatchlist = () => {
    addToWatchlistMutation();
    setIsOnWatchedList((prevState) => !prevState);
  };

  const handleAddFeedback = () => {
    navigate(`/movies/${id}/feedback-form`);
  };

  if (!dataMovie || !dataReview) return null;

  const movie: Movie = dataMovie.movieQuery.movie;
  const reviews: Review[] = dataReview.reviewQuery.reviewMovie;

  const reviewUserId = getReviewsUserId(reviews).includes(
    userData?.userId ?? 0
  );

  return (
    <MovieContainer>
      <MovieWrapper>
        <MovieTitleContainer>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieRating>
            <Star
              style={{ color: `${pallete.FRENCH_MAUVE}`, fontSize: "35px" }}
            />
            {calculateAverageRating(getReviews(reviews))} / 5
          </MovieRating>
        </MovieTitleContainer>

        <MovieImagesContainer>
          <MovieImageArrowsWrapper>
            <IconButton onClick={prevImage}>
              <ArrowBackIosNew sx={{ color: `${pallete.PLATINUM}` }} />
            </IconButton>
            <img src={movie.imagesUrls[currentImage]} alt={movie.title} />
            <IconButton onClick={nextImage}>
              <ArrowForwardIos sx={{ color: `${pallete.PLATINUM}` }} />
            </IconButton>
          </MovieImageArrowsWrapper>
        </MovieImagesContainer>

        <MovieDescriptionContainer>
          {movie.description}
        </MovieDescriptionContainer>

        <MovieDetailComponent title="Genres:" list={movie.genres} />
        <MovieDetailComponent title="Cast:" list={movie.cast} />
        <MovieDetailComponent title="Director:" string={movie.director} />

        <MovieSectionContainer>
          <ReviewButton
            active={ratingsActive}
            func={handleRatings}
            title="Ratings"
          />
          <ReviewButton
            active={commentsActive}
            func={handleComments}
            title="Comments"
          />
          {userData?.isAuthenticated && !reviewUserId && (
            <ReviewButton
              active="false"
              func={handleAddFeedback}
              title="Add Review"
            />
          )}
          <MovieAddToWatchlist>
            {userData?.isAuthenticated && (
              <MovieAddToWatchListWarpper>
                {isOnWatchedList ? (
                  <p>Added to watch list</p>
                ) : (
                  <p>Add to watch list</p>
                )}
                <IconButton
                  onClick={handleAddToWatchlist}
                  disabled={isOnWatchedList}
                >
                  {isOnWatchedList ? (
                    <Favorite sx={{ color: pallete.FRENCH_MAUVE }} />
                  ) : (
                    <FavoriteBorder sx={{ color: pallete.PLATINUM }} />
                  )}
                </IconButton>
              </MovieAddToWatchListWarpper>
            )}
          </MovieAddToWatchlist>
        </MovieSectionContainer>

        {ratingsActive === "true" && (
          <MovieReviewSection>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <ReviewSection
                  review={review}
                  index={index}
                  rating={true}
                  key={index}
                />
              ))
            ) : (
              <div>There are no reviews.</div>
            )}
          </MovieReviewSection>
        )}

        {commentsActive === "true" && (
          <MovieReviewSection>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <ReviewSection
                  review={review}
                  index={index}
                  comment={true}
                  key={index}
                />
              ))
            ) : (
              <div>There are no comments.</div>
            )}
          </MovieReviewSection>
        )}
      </MovieWrapper>
    </MovieContainer>
  );
};

export default MoviePage;
