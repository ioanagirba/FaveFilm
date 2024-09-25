import styled from "styled-components";
import { rem } from "../../utils/rem";
import * as pallete from "../../utils/Variables";

export const MovieContainer = styled.div`
  display: contents;
`;

export const MovieWrapper = styled.div`
  padding-top: ${rem(100)};
  margin: 0 ${rem(220)} 0 ${rem(220)};

  @media (max-width: 880px) {
    margin: 0 150px 0 150px;
  }

  @media (max-width: 660px) {
    margin: 0 50px 0 50px;
  }

  @media (max-width: 460px) {
    margin: 0 ${rem(10)} 0 ${rem(10)};
  }
`;

export const MovieTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MovieTitle = styled.div`
  font-size: ${rem(48)};
`;

export const MovieRating = styled.div`
  font-size: 24px;
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const MovieImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${rem(20)};
  background-color: rgba(234, 234, 234, 0.05);
`;

export const MovieImageArrowsWrapper = styled.div`
  display: flex;

  img {
    height: 100%;
    width: 100%;
    max-width: ${rem(700)};
    max-height: ${rem(700)};

    @media (max-width: 1300px) {
      max-width: ${rem(500)};
      max-height: ${rem(400)};
    }

    @media (max-width: 1050px) {
      max-width: ${rem(400)};
      max-height: ${rem(400)};
    }

    @media (max-width: 930px) {
      max-width: ${rem(200)};
      max-height: ${rem(400)};
    }
  }
`;

export const MovieDescriptionContainer = styled.div`
  display: flex;
  font-size: 14px;
  padding: 15px 10px 15px 10px;
  background-color: rgba(234, 234, 234, 0.05);
  border-bottom: 2px solid rgba(234, 234, 234, 0.4);
`;

export const MovieSectionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 10px 15px 10px;
  background-color: rgba(234, 234, 234, 0.05);
  border-bottom: 2px solid rgba(234, 234, 234, 0.4);
`;

export const MovieSectionText = styled.div`
  font-size: 14px;

  @media (max-width: 880px) {
    margin-top: ${rem(10)};
  }
`;

export const MovieSectionItems = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 460px) {
    flex-wrap: nowrap;
  }
`;

export const MovieSectionBorderedItems = styled.div`
  font-size: 14px;
  margin-left: ${rem(20)};
  border: 1px solid ${pallete.PLATINUM};
  border-radius: 10px;
  padding: ${rem(5)} ${rem(12)} ${rem(5)} ${rem(12)};

  &:hover {
    background-color: rgba(234, 234, 234, 0.2);
  }

  @media (max-width: 880px) {
    margin-top: ${rem(10)};
  }

  @media (max-width: 460px) {
    margin-left: 15px;
    padding: 3px 10px 3px 10px;
  }
`;

export const MovieReviewSection = styled.div`
  font-size: 14px;
  padding: 15px 10px 15px 10px;
  background-color: rgba(234, 234, 234, 0.05);
  margin-bottom: 30px;
`;

interface ActiveProps {
  active: string;
}

export const MovieReviewButton = styled.button<ActiveProps>`
  font-size: 14px;
  margin-right: ${rem(20)};
  font-family: inherit;
  color: inherit;
  border: 1px solid ${pallete.PLATINUM};
  border-radius: 10px;
  cursor: pointer;
  padding: ${rem(5)} ${rem(12)} ${rem(5)} ${rem(12)};
  background-color: ${(props) =>
    props.active === "true"
      ? "rgba(234, 234, 234, 0.5)"
      : "rgba(234, 234, 234, 0.05)"};
  color: ${(props) =>
    props.active === "true" ? pallete.RICH_BLACK : pallete.PLATINUM};

  @media (max-width: 880px) {
    margin-top: ${rem(10)};
  }

  @media (max-width: 460px) {
    margin-left: 15px;
    padding: 3px 10px 3px 10px;
  }
`;

export const MovieAddToWatchlist = styled.div`
  margin-left: auto;
`;

export const MovieAddToWatchListWarpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieReviewItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px 15px 10px;
  background-color: rgba(234, 234, 234, 0.05);
  border-bottom: 2px solid rgba(234, 234, 234, 0.4);
`;

export const MovieReviewUser = styled.div`
  display: flex;
  margin-right: 10px;
`;

export const MovieReview = styled.div`
  display: flex;
`;

export const MovieReviewDate = styled.div`
  display: flex;
  margin-left: 10px;
`;
