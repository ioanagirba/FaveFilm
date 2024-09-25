import styled from "styled-components";
import { rem } from "../../utils/rem";
import * as pallete from "../../utils/Variables";

export const FeedbackFormContainer = styled.div`
  padding-top: ${rem(200)};
  margin: 0 ${rem(220)} 0 ${rem(220)};
  min-width: 400px;
  max-width: 500px;

  @media (max-width: 880px) {
    margin: 0 150px 0 150px;
  }

  @media (max-width: 760px) {
    margin: 0 50px 0 50px;
  }

  @media (max-width: 460px) {
    margin: 0 0 0 0;
  }
`;

export const FeedbackFormWrapper = styled.div`
  margin: 25px;
`;

export const FeedbackFormTitle = styled.div`
  font-size: ${rem(48)};
`;

export const FeedbackFormContent = styled.div`
  margin: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(20)} ${rem(0)};
`;

export const StyledLabel = styled.label`
  font-size: ${rem(18)};
  margin-bottom: ${rem(5)};
`;

export const StyledInput = styled.input`
  background: ${pallete.ULTRA_VIOLET};
  border-radius: ${rem(8)};
  height: ${rem(25)};
  width: ${rem(350)};
  color: ${pallete.PLATINUM};
  padding: ${rem(20)};

  @media (max-width: 550px) {
    width: ${rem(300)};
  }
`;

export const FeedbacFormRatingSection = styled.div`
  display: flex;
  gap: ${rem(15)};
`;

export const FeedbackFormButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FeedbackFormSuccessMessage = styled.div`
  margin-bottom: 10px;
`;
