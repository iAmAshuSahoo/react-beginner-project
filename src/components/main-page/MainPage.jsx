import { Fragment } from "react";
import Card from "../card/Card";
import "./MainPage.css"

function MainPage() {
  const projects = [
    {
      id: "Proj1",
      name: "Carousal app",
      path: "carousal/",
      img: "assets/img/carousal.PNG",
    },
    {
      id: "Proj2",
      name: "FAQ app",
      path: "faq/",
      img: "assets/img/faq.PNG",
    },
  ];
  const listOfCards = projects.map((project) => (
    <Fragment key={project.id}>
      <Card
        name={project.name}
        location={project.path}
        img={project.img}
      />
    </Fragment>

  ));
  return (
    <>
      <h1 className="main-head">React Projects for Beginners in 2023</h1>
      <h2 className="sub-head">Explore the 7 projects for enhancing your learning</h2>
      <div className="card-list">
        {listOfCards}
      </div>
    </>
  );
}

export default MainPage;
