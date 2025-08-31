import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MarketPage from "./pages/MarketPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/markets" element={<MarketPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
