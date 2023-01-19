import { Fragment } from "react";
import Card from "../card/Card";
import "./MainPage.css"

function MainPage() {
  const projects = [
    {
      id: "Proj1",
      name: "Photo Carousal app",
      path: "carousal",
      img: "/src/assets/carousal.PNG",
    },
  ];
  const listOfCards = projects.map((project) => (
    <Fragment key={project.id}>
      <Card
        id={project.id}
        name={project.name}
        location={project.path}
        img={project.img}
      />
    </Fragment>

  ));
  return (
    <>
      <h1>React Projects for Beginners in 2023</h1>
      <h2>Explore the 7 projects for enhancing your learning</h2>
      <div className="card-list">
        {listOfCards}
      </div>
    </>
  );
}

export default MainPage;
