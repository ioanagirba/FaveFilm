import { ChangeEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { useAuth } from "../../contexts/authContext";
import logo from "../../../public/favefilm-high-resolution-logo-transparent.png";
import { useSearchContext } from "../../contexts/searchContext";
import { useMovies } from "../../contexts/movieContext";
import {
  ComponentsContainer,
  HeaderContainer,
  InputContainer,
  LeftSide,
  LogoContainer,
  SearchIcon,
  ClearInput,
  HeaderButtonsContainer,
} from "./Header.styled";

const Header = () => {
  const { movies } = useMovies();
  const { userData, setUserData } = useAuth();
  const { inputValue, setInputValue, handleSearch, setResults } =
    useSearchContext();
  const location = useLocation();
  const navigate = useNavigate();
  const redirectToWatchlist = () => {
    navigate("/watchlist");
  };
  const redirectToLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    setUserData(null);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputValue(lowerCase);
  };

  const handleSubmit = () => {
    navigate("/");
    handleSearch(movies);
  };

  const handleClearInput = () => {
    setInputValue("");
    setResults(movies);
  };

  const isHomePage = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";

  console.log(!!userData);

  return (
    <HeaderContainer>
      <ComponentsContainer isAuthenticated={!!userData}>
        <LeftSide>
          <LogoContainer>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </LogoContainer>

          {isHomePage && (
            <InputContainer>
              <input
                type="text"
                placeholder="Search Movie"
                onChange={(e) => handleInputChange(e)}
                value={inputValue}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit();
                  }
                }}
              />

              <Button type="icon" onClickFunction={handleSubmit}>
                <SearchIcon />
              </Button>

              <Button type="icon" onClickFunction={handleClearInput}>
                <ClearInput hidden={inputValue === ""} />
              </Button>
            </InputContainer>
          )}
        </LeftSide>

        {!userData?.isAuthenticated && !isLoginPage && (
          <Button onClickFunction={redirectToLogin} type="text">
            Log In
          </Button>
        )}
        {userData?.isAuthenticated && (
          <HeaderButtonsContainer>
            <Button onClickFunction={redirectToWatchlist} type="primary">
              Watch List
            </Button>
            <Button onClickFunction={handleLogout} type="text">
              Log out
            </Button>
          </HeaderButtonsContainer>
        )}
      </ComponentsContainer>
    </HeaderContainer>
  );
};

export default Header;
