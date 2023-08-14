import "./Card.css";

function Card({ name, img, urlRedirect, redirect }) {
  return (
      <div className="card-project">
        <img src={img} alt="Avatar" className="project-image" />
        <div className="container">
          <h4>
            {redirect ? <a href={urlRedirect} target="_blank" rel="noopener noreferrer">{name}</a> : <span>{name}</span>}
          </h4>
        </div>
      </div>
  );
}

export default Card;
