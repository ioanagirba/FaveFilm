import styled from "styled-components";
import * as pallete from "../../utils/Variables";
import { rem } from "../../utils/rem";

interface ButtonProps {
  type: "primary" | "text" | "secondary" | "icon" | "tertiary";
}

export const StyledButton = styled.button<ButtonProps>`
  border-radius: ${rem(10)};
  font-size: ${rem(12)};
  padding: ${rem(12)};
  white-space: nowrap;

  background-color: ${(props) =>
    props.type === "primary" && `${pallete.PLATINUM} `};
  background-color: ${(props) => props.type === "secondary" && `transparent`};
  background-color: ${(props) =>
    props.type === "tertiary" && `${pallete.FRENCH_MAUVE} `};
  background-color: ${(props) => props.type === "text" && `transparent`};
  background-color: ${(props) => props.type === "icon" && `transparent`};

  color: ${(props) => props.type === "text" && `${pallete.PLATINUM}`};
  color: ${(props) => props.type === "secondary" && `${pallete.PLATINUM}`};
  color: ${(props) => props.type === "primary" && `${pallete.SPACE_CADET}`};
  color: ${(props) => props.type === "tertiary" && `${pallete.PLATINUM}`};

  &:hover {
    background-color: ${pallete.ULTRA_VIOLET};
    color: ${(props) => props.type === "primary" && `${pallete.PLATINUM}`};
    background-color: ${(props) => props.type === "icon" && "transparent"};
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    padding: ${rem(8)};
    font-size: ${rem(10)};
  }
`;
