import styled from "styled-components";
import * as pallete from "../../utils/Variables";
import { rem } from "../../utils/rem";

export const HomePageContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: ${rem(100)} ${rem(200)} ${rem(0)} ${rem(25)};

  @media (max-width: 1280px) {
    padding: ${rem(100)} ${rem(60)} ${rem(0)} ${rem(25)};
  }

  @media (max-width: 700px) {
    padding: ${rem(100)} ${rem(10)} ${rem(0)} ${rem(10)};
  }
`;

export const HomePageComponents = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${rem(20)};
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  gap: ${rem(40)};

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: ${rem(10)};
`;

export const CardFilters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justity-content: space-between;
  gap: ${rem(10)};
  font-size: ${rem(12)};

  h2 {
    color: ${pallete.FRENCH_MAUVE};
  }

  button {
    min-width: ${rem(90)};
  }

  @media (max-width: 700px) {
    gap: ${rem(50)};
    flex-direction: row;
    align-items: center;
    justity-content: space-between;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: ${rem(880)};
  min-width: ${rem(180)};
  gap: ${rem(23)};
  flex-wrap: wrap;

  p {
    font-size: ${rem(14)};
  }
`;

export const RightConatiner = styled.div`
  min-height: ${rem(600)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${rem(20)};

  h2 {
    color: ${pallete.FRENCH_MAUVE};
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const CardContentRecommandation = styled.div`
  height: ${rem(280)};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${rem(15)};

  img {
    max-width: ${rem(100)};
    object-fir: cover;
  }

  p {
    max-width: ${rem(200)};
    font-size: ${rem(14)};
    text-align: justify;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 9;
    overflow: hidden;
  }

  p::after {
    content: "...";
  }
`;
