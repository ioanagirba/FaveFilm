import { SetStateAction, useState } from "react";
import { useParams } from "react-router-dom";
import { Star } from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import { useAuth } from "../../contexts/authContext";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import Input from "./Input";
import { getReviewDate } from "../movie/movie-functions";
import * as pallete from "../../utils/Variables";
import { Review } from "../../utils/types";
import { ADD_REVIEW } from "../../utils/queries";
import {
  FeedbacFormRatingSection,
  FeedbackFormButtonsContainer,
  FeedbackFormContainer,
  FeedbackFormContent,
  FeedbackFormSuccessMessage,
  FeedbackFormTitle,
  FeedbackFormWrapper,
  StyledLabel,
} from "./FeedbackForm.styled";

const FeedbackForm = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { userData } = useAuth();
  const [addReview] = useMutation(ADD_REVIEW);
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <div>No movie ID provided.</div>;
  }
  const parsedId = parseInt(id, 10);
  const dateTime = new Date();
  const formattedDate = dateTime.toISOString();
  const formattedDateTime = formattedDate.slice(0, -1) + "599";

  const showSuccessAndRedirect = () => {
    setShowSuccessMessage(true);
    setComment("");
    setRating(0);
    setIsButtonDisabled(true);

    setTimeout(() => {
      location.replace(`/movies/${parsedId}`);
    }, 3000);
  };

  const handleSave = () => {
    if (rating > 0 && comment !== "") {
      const newReview: Review = {
        rating: rating,
        comment: comment,
        userId: userData?.userId ?? 0,
        movieId: parsedId,
      };

      addReview({
        variables: {
          review: newReview,
        },
      });

      showSuccessAndRedirect();
    } else {
      alert("Please fill in all fields!");
    }
  };

  const handleCancel = () => {
    location.replace(`/movies/${parsedId}`);
  };

  return (
    <FeedbackFormContainer>
      <Card>
        <FeedbackFormWrapper>
          <FeedbackFormTitle>Review Form</FeedbackFormTitle>
          <FeedbackFormContent>
            <StyledLabel>Rating</StyledLabel>
            <FeedbacFormRatingSection>
              {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={currentRating}
                      onClick={() => setRating(currentRating)}
                      style={{ display: "none" }}
                    />
                    <Star
                      sx={{
                        fontSize: "50px",
                        gap: "10px",
                        cursor: "pointer",
                        color:
                          currentRating <= (hover || rating)
                            ? pallete.FRENCH_MAUVE
                            : pallete.PLATINUM,
                      }}
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(0)}
                    />
                  </label>
                );
              })}
            </FeedbacFormRatingSection>
            <Input
              label="Date"
              defaultValue={getReviewDate(formattedDateTime)}
              disable={true}
            />

            <Input
              label="Comment"
              disable={false}
              value={comment}
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                setComment(e.target.value)
              }
            />

            {showSuccessMessage && (
              <FeedbackFormSuccessMessage>
                <p>Review saved successfully!</p>
                <p>You will be redirected to movie page.</p>
              </FeedbackFormSuccessMessage>
            )}
            <FeedbackFormButtonsContainer>
              <Button
                type="tertiary"
                onClickFunction={handleSave}
                disable={isButtonDisabled}
              >
                Save
              </Button>

              <Button
                type="text"
                onClickFunction={handleCancel}
                disable={isButtonDisabled}
              >
                Cancel
              </Button>
            </FeedbackFormButtonsContainer>
          </FeedbackFormContent>
        </FeedbackFormWrapper>
      </Card>
    </FeedbackFormContainer>
  );
};

export default FeedbackForm;
