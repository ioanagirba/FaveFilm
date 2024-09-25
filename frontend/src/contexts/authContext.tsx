import {
  createContext,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";

interface LoggedUserData {
  userId: number;
  isAuthenticated: boolean;
}
interface AuthContextType {
  userData: LoggedUserData | null;
  setUserData: Dispatch<SetStateAction<LoggedUserData | null>>;
}

const getUserData = () => {
  const userId = localStorage.getItem("userId");
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (userId && isAuthenticated) {
    return {
      userId: Number(userId),
      isAuthenticated: Boolean(isAuthenticated),
    };
  }
  return null;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  userData: getUserData(),
  setUserData: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [userData, setUserData] = useState<LoggedUserData | null>(
    getUserData()
  );

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
