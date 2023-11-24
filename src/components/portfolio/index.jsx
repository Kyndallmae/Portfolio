import { useState } from "react";
import Project from "../projects";

function Portfolio() {
  const [projects] = useState([
    {
      name: "This Is Fine",
      desc: "Html, CSS, React, MongoDB, GraphQl",
      link: "https://thisisfineep-1098472d7a52.herokuapp.com/",
      repo: "https://github.com/Kyndallmae/ThisIsFine.git",
      img: "./img/thisisfine.png"
    },
    {
      name: "Weather Wizard",
      desc: "Javascript, Express, HTML, CSS",
      link: "https://kyndallmae.github.io/Weather-Wizard/",
      repo: "https://github.com/Kyndallmae/Weather-Wizard.git",
      img: "./img/weatherwizard.png",
    },
    {
      name: "Stunning Quacamole",
      desc: "Javascript, Express, HTML, CSS",
      link: "https://kyndallmae.github.io/stunning-guacamole/",
      repo: "https://github.com/Kyndallmae/stunning-guacamole.git",
      img: "./img/stunningguac.png",
    },
  ]);

  return (
    <div>
      <div className="row justify-content-between">
        <h1 className="display-2 text-white text-center">Portfolio</h1>
      </div>
      <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
