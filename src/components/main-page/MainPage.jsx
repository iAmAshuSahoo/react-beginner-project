import { Fragment } from "react";
import Card from "../card/Card";
import "./MainPage.css"
import { Outlet, Link } from "react-router-dom";

function MainPage() {
  const allProjects = [
    {
      type: "Beginner",
      projects:
        [
          {
            id: "Proj1",
            name: "Carousal app",
            path: "carousal/",
            img: "assets/img/carousal.PNG",
          },
          {
            id: "Proj2",
            type: "Beginner",
            name: "FAQ app",
            path: "faq/",
            img: "assets/img/faq.PNG",
          },
          {
            id: "Proj3",
            type: "Beginner",
            name: "Quote app",
            path: "quote/",
            img: "assets/img/quote.PNG",
          },
          {
            id: "Proj4",
            type: "Beginner",
            name: "Shopping List app",
            path: "shoppingList/",
            img: "assets/img/shopping.PNG",
          },
          {
            id: "Proj5",
            type: "Beginner",
            name: "Github Username app",
            path: "githubUser/",
            img: "assets/img/shopping.PNG",
          },
        ],
    },
    {
      type: "Intermediate",
      projects:
        [
          {
            id: "InProj1",
            type: "Intermediate",
            name: "Football Match app",
            path: "footballMatch/",
            img: "assets/img/football.PNG",
          },
          {
            id: "InProj2",
            type: "Intermediate",
            name: "AG grid app",
            path: "ag-grid/",
            img: "assets/img/football.PNG",
          },
          {
            id: "InProj3",
            type: "Intermediate",
            name: "React Table app",
            path: "react-table/",
            img: "assets/img/football.PNG",
          },
          {
            id: "InProj4",
            type: "Intermediate",
            name: "Water Tank Problem",
            path: "water-tank/",
            img: "assets/img/football.PNG",
          },
          {
            id: "InProj5",
            type: "Intermediate",
            name: "Custom Game",
            path: "football-game/",
            img: "assets/img/football.PNG",
          },
          {
            id: "InProj6",
            type: "Intermediate",
            name: "Advance Game",
            path: "advance-football-game/",
            img: "assets/img/football.PNG",
          },
        ]
    }
  ];
  const listOfCards = allProjects.map((projectType) => (
    <Fragment key={projectType.type}>
      <h2 className="main-head-style">List of React Projects for {projectType.type} in 2023</h2>
      <h3 className="sub-head-style mb-4">Explore the {projectType.length} projects for enhancing your learning</h3>
      <div className="card-list">
        {projectType.projects.map((project) => (
          <Link to={project.path} key={projectType.type + project.id}>
              <Card
                name={project.name}
                img={project.img}
              />
          </Link>))}
      </div>
    </Fragment>
  ));
  return (
    <div className="initialRoot">
      <h1 className="main-head">React Projects</h1>
      {listOfCards}
    </div>
  );
}

export default MainPage;
