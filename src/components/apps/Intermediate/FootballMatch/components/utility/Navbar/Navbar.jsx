import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navbarStyle from "./Navbar.module.css";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import Schedule from "../../Pages/Schedule/Schedule";

function NavbarComponent() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid className={`${navbarStyle.leagueLogo} ps-4`}>
        <Link to="/"
        // onClick={() => handleClick("/")}
        >
          <div className="d-flex">
            <img
              alt="logo"
              src="assets/Images/logo.svg"
              width="110"
              height="50"
              className="d-inline-block align-top"
            />
          </div>
        </Link>
        <Form className="d-flex">
          <Link
            to="/footballMatch/schedule"
            className={navbarStyle.linkStyle}
          // onClick={() => handleClick("/footballMatch/schedule")}
          >
            <Nav className="me-4">
              <img
                alt="schedule-icon"
                src="assets/Images/schedule.png"
                width="25"
                height="25"
                className="d-inline-block align-top pe-1"
              />
              Schedule
            </Nav>
          </Link>
          <Link
            to="/footballMatch/leaderboard"
            className={navbarStyle.linkStyle}
          // onClick={() => handleClick("/footballMatch/leaderboard")}
          >
            <Nav className="me-4">
              <img
                alt="leaderboard"
                src="assets/Images/leaderboard.png"
                width="25"
                height="25"
                className="d-inline-block align-top pe-1"
              />
              Leaderboard
            </Nav>
          </Link>
        </Form>
      </Container>
    </Navbar>

  );
}

export default NavbarComponent;
