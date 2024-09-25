import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import MoviePage from "./pages/movie/MoviePage";
import FeedbackForm from "./pages/feedback/FeedbackForm";
import WatchListPage from "./pages/watch-list/WatchListPage";
import Header from "./components/header/Header";
import LoginPage from "./pages/login/LoginPage";
import { useAuth } from "./contexts/authContext";

function App() {
  const { userData } = useAuth();

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          {!userData && <Route path="/login" element={<LoginPage />} />}
          {userData && <Route path="/watchlist" element={<WatchListPage />} />}
          <Route path="/movies/:id/feedback-form" element={<FeedbackForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
