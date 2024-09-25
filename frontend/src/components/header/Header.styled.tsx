import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import * as pallete from "../../utils/Variables";
import { rem } from "../../utils/rem";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${pallete.SPACE_CADET};
  padding: ${rem(40)} ${rem(60)};
  position: fixed;
  z-index: 999;

  @media (max-width: 700px) {
    padding: ${rem(40)} ${rem(10)};
  }
`;

interface ComponentsContainerProps {
  isAuthenticated: boolean;
}

export const ComponentsContainer = styled.div<ComponentsContainerProps>`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1280px) {
    gap: ${(props) => (props.isAuthenticated ? `${rem(100)}` : `${rem(180)}`)};
  }

  @media (min-width: 1280px) {
    gap: ${(props) => (props.isAuthenticated ? `${rem(250)}` : `${rem(320)}`)};
  }

  @media (max-width: 900px) {
    gap: ${rem(10)};
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: ${rem(75)};

  @media (max-width: 700px) {
    gap: ${rem(0)};
  }
`;

export const LogoContainer = styled.div`
  img {
    max-width: ${rem(100)};
    object-fit: cover;

    @media (max-width: 700px) {
      max-width: ${rem(70)};
    }
  }
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  max-width: ${rem(900)};
  min-width: ${rem(130)};
  max-height: ${rem(50)};

  input {
    width: 100%;
    background-color: ${pallete.PLATINUM};
    padding: ${rem(7)} ${rem(10)} ${rem(7)} ${rem(12)};
    border-radius: ${rem(10)};
    outline: none;

    &:focus {
      border: 2px solid ${pallete.FRENCH_MAUVE};
    }
  }

  button {
    position: absolute;
    margin: ${rem(0)};
    padding: ${rem(0)};
    right: ${rem(0)};
    top: ${rem(2)};
  }
`;

export const SearchIcon = styled(SearchOutlinedIcon)`
  text: center;
  color: ${pallete.SPACE_CADET};
`;

interface ClearInputProps {
  hidden: boolean;
}

export const ClearInput = styled(ClearIcon)<ClearInputProps>`
  position: absolute;
  right: ${rem(25)};
  visibility: ${(props) => props.hidden === true && "hidden"};
  text: center;
  color: ${pallete.SPACE_CADET};
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  gap: ${rem(5)};
  button {
    font-size: ${rem(10)};
  }
`;
