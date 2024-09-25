import styled from "styled-components";
import { rem } from "../../utils/rem";

export const MovieCardWatchList = styled.div`
  display: flex;
  gap: ${rem(30)};
  justify-content: space-between;
  width: 100%;

  @media (max-width: 450px) {
    gap: ${rem(5)};
  }
`;

export const MoviePicture = styled.img`
  max-width: ${rem(100)};
  max-height: ${rem(120)};
  object-fit: cover;

  @media (max-width: 600px) {
    max-height: ${rem(80)};
  }
`;

interface MovieDetailsLeftProps {
  isHomePage?: boolean;
}

export const MovieDetailsLeft = styled.div<MovieDetailsLeftProps>`
  display: flex;
  gap: ${rem(20)};

  @media (max-width: 450px) {
    gap: ${rem(5)};

    div {
      max-width:${({ isHomePage }) =>
        isHomePage ? `${rem(300)}` : `${rem(180)}`}
  }
`;

export const MovieDetailsTitle = styled.div`
  font-size: ${rem(24)};

  @media (max-width: 450px) {
    font-size: ${rem(20)};
  }
`;
export const MovieDetailsDescription = styled.div`
  font-size: ${rem(14)};
  text-align: justify;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;

  @media (max-width: 600px) {
    font-size: ${rem(12)};
  }
`;
export const MovieDetailsRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  min-width: 60px;
`;
export const DeleteMovieButton = styled.button`
  font-size: ${rem(10)};
  background-color: rgba(0, 0, 0, 0);
  color: inherit;
  font-family: inherit;
  white-space: nowrap;
  padding: ${rem(5)};
  border-radius: ${rem(5)};

  &:hover {
    background-color: #575c7b;
    cursor: pointer;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(5)};
`;

export const Score = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
