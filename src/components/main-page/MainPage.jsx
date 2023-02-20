import { Fragment } from "react";
import Card from "../card/Card";
import "./MainPage.css"

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
          // {
          //   id: "Proj3",
          //   type: "Beginner",
          //   name: "Quote app",
          //   path: "quote/",
          //   img: "assets/img/quote.PNG",
          // },
        ],
    },
    {
      type: "Intermediate",
      projects:
        [
          {
            id: "Proj1",
            type: "Intermediate",
            name: "Football Match app",
            path: "footballMatch/",
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
          <Fragment key={projectType.type + project.id}>
            <Card
              name={project.name}
              location={project.path}
              img={project.img}
            />
          </Fragment>))}
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
