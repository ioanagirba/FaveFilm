import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { Movie } from "../utils/types";

interface SearchContextType {
  inputValue: string;
  setInputValue: (value: string) => void;
  results: Movie[];
  handleSearch: (movie: Movie[]) => void;
  setResults: Dispatch<SetStateAction<Movie[]>>;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearchContext = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({
  children,
}: SearchProviderProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  const [results, setResults] = useState<Movie[]>([]);

  const handleSearch = (movies: Movie[]) => {
    const searchResults = movies.filter((movie) => {
      if (inputValue === "") {
        return movie;
      } else {
        return movie.title.toLowerCase().includes(inputValue);
      }
    });

    setResults(searchResults);
  };

  return (
    <SearchContext.Provider
      value={{ inputValue, setInputValue, results, setResults, handleSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};
