import "./Card.css";
import { Outlet, Link } from "react-router-dom";

function Card({ id, name, img, location }) {
  return (
    <Link to={location}>
      <div className="card">
        <img src={img} alt="Avatar" className="project-image" />
        <div className="container">
          <h4>
            <b>{name}</b>
          </h4>
        </div>
      </div>
    </Link>
  );
}

export default Card;
