import styled from "styled-components";
import { SPACE_CADET, PLATINUM, FRENCH_MAUVE } from "../../utils/Variables";
import { rem } from "../../utils/rem";

export const Main = styled("div")`
  width: 100%;
`;

interface BackgroundProps {
  blurred: boolean;
}

export const Background = styled.div<BackgroundProps>`
  @media (max-width: 700px) {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(${(props) => (props.blurred ? "5px" : "0")});
    position: fixed;
    top: ${rem(80)};
    left: 0;
    z-index: 1;
    cursor: pointer;
  }
`;

export const DropDownContainer = styled("div")`
  display: flex;
  justify-content: center;
`;

interface DropDownHeaderProps {
  isOpen: boolean;
}

export const DropDownHeader = styled("div")<DropDownHeaderProps>`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border: ${rem(1)} solid ${PLATINUM};
  padding: ${rem(10)};
  border-radius: ${rem(10)};
  font-size: ${rem(14)};
  cursor: pointer;

  &:focuse {
    border: 2px solid ${FRENCH_MAUVE};
  }

  span {
    text-align: center;
  }

  p {
    text-align: center;
    margin-right: ${rem(10)};
  }

  &::after {
    content: "";
    border: solid ${PLATINUM};
    border-width: 0 ${rem(1)} ${rem(1)} 0;
    display: inline-block;
    padding: ${rem(3)};
    transform: rotate(-45deg);
    transition: transform 0.3s ease;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    &::after {
      transform: rotate(45deg);
    }
  `}
`;

export const DropDownListContainer = styled("div")`
  position: absolute;
  top: ${rem(185)};
  z-index: 100;
`;

export const DropDownList = styled("ul")`
  min-width: ${rem(170)};
  border-radius:${rem(10)};
  display: flex;
  flex-direction:column;
  align-items: center;
  background-color: ${SPACE_CADET};
  box-sizing: border-box;
  color: ${PLATINUM}
  font-size:${rem(14)};

  &:first-child {
    padding-top: ${rem(5)}
  }

   @media (max-width: 700px) {
     background-color: transparent;
     font-size:${rem(24)};
   }
`;

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: ${rem(10)};
  cursor: pointer;

  &:hover {
    color: ${FRENCH_MAUVE};
    transform: scale(1.1);
  }
`;
