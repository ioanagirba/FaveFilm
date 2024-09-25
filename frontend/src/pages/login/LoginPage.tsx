import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGGED_USER } from "../../utils/queries";
import { useMutation } from "@apollo/client";
import { useAuth } from "../../contexts/authContext";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Card from "../../components/card/Card";
import {
  FormTitle,
  LoginPageCard,
  LoginPageContainer,
  StyledForm,
} from "./LoginPage.styled";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [loginUser] = useMutation(LOGGED_USER);
  const { setUserData } = useAuth();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await loginUser({
        variables: {
          email: username,
          password,
        },
      });

      localStorage.setItem("userId", response.data.userMutation.loginUser.id);
      localStorage.setItem("isAuthenticated", "true");

      setUserData({
        userId: response.data.userMutation.loginUser.id,
        isAuthenticated: true,
      });

      navigate("/");
    } catch (error) {
      console.error(error);
      if (!username || !password) {
        setError("Missing details");
      } else {
        setError("Inalid username or password");
      }
    }
  };

  return (
    <LoginPageContainer>
      <LoginPageCard>
        <Card>
          <div>
            <FormTitle>LogIn</FormTitle>
            <StyledForm onSubmit={handleLogin}>
              <Input
                label="Username"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <Button type="tertiary">Login</Button>
            </StyledForm>
            {error && <p>{error}</p>}
          </div>
        </Card>
      </LoginPageCard>
    </LoginPageContainer>
  );
}

export default LogIn;
