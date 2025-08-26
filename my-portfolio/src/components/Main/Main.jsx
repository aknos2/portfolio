import MyDescription from "./MyDescription";
import WaveContainer from "./WaveContainer";
import Project from './Project';
import Languages from './Languages';
import { useState } from "react";
import { projects } from "../../data/projects";

function Main() {
  const [isProject, setIsProject] = useState(true);
  const [currentProject, setCurrentProject] = useState(0);

  const watchingProject = projects[currentProject];

  return (
    <div style={{ position: "relative" }}>
      <WaveContainer />
      {!isProject ? (
        <MyDescription/>
      ) : (
        <Languages watchingProject={watchingProject}/>
      )}
      <Project currentProject={currentProject} setCurrentProject={setCurrentProject}/>

    </div>
  )
}

export default Main;