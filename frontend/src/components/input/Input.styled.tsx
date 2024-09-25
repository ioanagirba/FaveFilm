import styled from "styled-components";
import { rem } from "../../utils/rem";
import { PLATINUM, ULTRA_VIOLET } from "../../utils/Variables";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(20)} ${rem(0)};
`;

export const StyledLabel = styled.label`
  font-size: ${rem(18)};
`;

export const StyledInput = styled.input`
  background: ${ULTRA_VIOLET};
  padding: ${rem(8)};
  border-radius: ${rem(8)};
  height: ${rem(25)};
  width: ${rem(250)};
  color: ${PLATINUM};

  @media (max-width: 500px) {
    width: ${rem(130)};
  }
`;
