import styled from "styled-components";
import { rem } from "../../utils/rem";

export const LoginPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoginPageCard = styled.div`
  padding: ${rem(100)};
  max-width: ${rem(500)};
`;

export const FormTitle = styled.div`
  font-size: ${rem(40)};
`;

export const StyledForm = styled.form`
  padding: ${rem(20)};
`;
