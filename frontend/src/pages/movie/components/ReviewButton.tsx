import { MouseEvent } from "react";
import { MovieReviewButton } from "../Movie.styled";

interface ReviewButton {
  title: string;
  active: string;
  func: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const ReviewButton = ({ title, active, func }: ReviewButton) => {
  return (
    <MovieReviewButton active={active} onClick={func}>
      {title}
    </MovieReviewButton>
  );
};
