import './css/main.css';
import MyDescription from "./MyDescription";
import WaveContainer from "./WaveContainer";
import Project from './Project/Project';
import Languages from './Project/Languages';
import { useState } from "react";
import { projects } from "../../data/projects";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useRef } from 'react';

const ProjectNest = ({isProject, watchingProject, setCurrentProject, currentProject}) => {
  const text = useRef();
  const title = useRef();

  useGSAP(() => {
    const splitText = SplitText.create(text.current, {
      type: "words",
    })

    gsap.from(splitText.words, {
      opacity: 0,
      x: 70,
      duration: 3,
      ease: "power2.out",
      onComplete: () => splitText.revert()
    })
    gsap.from(title.current, {
      opacity: 0,
      duration: 1,
      delay: 1.5,
      ease: "power2.out"
    })
  },  { dependencies: [isProject] });

  return (
        <>
          <div className='project-background-title'><h1 ref={text}>PROJECTS</h1></div>
          <div className="project-wrap">
            <Languages watchingProject={watchingProject} title={title}/>
            <Project currentProject={currentProject} setCurrentProject={setCurrentProject}/>
          </div>
         </>
  )
}

function Main({ isProject }) {
  const [currentProject, setCurrentProject] = useState(0);

  const watchingProject = projects[currentProject];

  return (
    <div style={{ position: "relative" }}>
      <WaveContainer isProject={isProject}/>
      {!isProject ? (
        <MyDescription/>
      ) : (
       <ProjectNest isProject={isProject} watchingProject={watchingProject} setCurrentProject={setCurrentProject} currentProject={currentProject}/>
      )}

    </div>
  )
}

export default Main;