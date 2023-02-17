import style from "./App.module.css";
import Schedule from "./components/Pages/Schedule/Schedule";
import Footer from "./components/utility/Footer/Footer";
import NavbarComponent from "./components/utility/Navbar/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/Pages/PageNotFound/PageNotFound";
import Leaderboard from "./components/Pages/Leaderboard/Leaderboard";

function FootballApp({ children }) {
  return (
    <div className={style.initialStyle}>
      <NavbarComponent />
      {children}
      <Footer />
    </div>
  );
}

export default FootballApp;
