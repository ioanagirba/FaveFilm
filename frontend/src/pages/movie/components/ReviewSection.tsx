import { Star, StarBorder } from "@mui/icons-material";
import { getReviewDate } from "../movie-functions";
import { Review } from "../../../utils/types";
import * as pallete from "../../../utils/Variables";
import {
  MovieReview,
  MovieReviewDate,
  MovieReviewItemContainer,
  MovieReviewUser,
} from "../Movie.styled";

interface ReviewSectionProp {
  review: Review;
  index: number;
  comment?: boolean;
  rating?: boolean;
}

const ReviewSection = ({
  review,
  index,
  comment,
  rating,
}: ReviewSectionProp) => {
  const getRating = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <Star key={i} style={{ color: `${pallete.FRENCH_MAUVE}` }} />
        );
      } else {
        stars.push(<StarBorder key={i} />);
      }
    }
    return stars;
  };

  return (
    <MovieReviewItemContainer key={index}>
      <MovieReviewUser>
        {review.user !== undefined && review.user.firstName}{" "}
        {review.user !== undefined && review.user.lastName}
      </MovieReviewUser>
      {rating && <MovieReview>{getRating(review.rating)}</MovieReview>}
      {comment && <MovieReview>{review.comment}</MovieReview>}
      <MovieReviewDate>
        {review.date !== undefined && getReviewDate(review.date)}
      </MovieReviewDate>
    </MovieReviewItemContainer>
  );
};

export default ReviewSection;
