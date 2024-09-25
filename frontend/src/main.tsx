import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { MovieProvider } from "./contexts/movieContext.tsx";
import { SearchProvider } from "./contexts/searchContext.tsx";
import { AuthProvider } from "./contexts/authContext.tsx";

const client = new ApolloClient({
  uri: "http://localhost:5195/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <ApolloProvider client={client}>
        <SearchProvider>
          <MovieProvider>
            <App />
          </MovieProvider>
        </SearchProvider>
      </ApolloProvider>
    </AuthProvider>
  </React.StrictMode>
);
