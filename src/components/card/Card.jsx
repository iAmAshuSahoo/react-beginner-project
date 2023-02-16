import "./Card.css";
import { Outlet, Link } from "react-router-dom";

function Card({ name, img, location }) {
  return (
    <Link to={location}>
      <div className="card-project">
        <img src={img} alt="Avatar" className="project-image" />
        <div className="container">
          <h4>
            {name}
          </h4>
        </div>
      </div>
    </Link>
  );
}

export default Card;
