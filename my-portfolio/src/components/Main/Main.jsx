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
import OtherProjects from './Project/OtherProjects';

const ProjectNest = ({isProject, setCurrentProject, currentProject}) => {
  const text = useRef();

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
  },  [isProject]);


  return (
        <>
          <div className='project-background-title'><h1 ref={text}>PROJECTS</h1></div>
          <div className="project-wrap">
            <Languages/>
            <Project currentProject={currentProject} setCurrentProject={setCurrentProject}/>
          </div>
         </>
  )
}

function Main({ isProject }) {
  const [currentProject, setCurrentProject] = useState(0);

  const watchingProject = projects[currentProject];

  return (
    <section>
      <div className="project-container" style={{ position: "relative" }}>
        <WaveContainer isProject={isProject}/>
        {!isProject ? (
          <MyDescription/>
        ) : (
          <>
          <ProjectNest isProject={isProject} watchingProject={watchingProject} setCurrentProject={setCurrentProject} currentProject={currentProject}/>
          <div className='scroll-down-message'>
            <div className="scrolldown-left"></div>
            <p>other projects</p>
            <div className="scrolldown-right"></div>
          </div>
          </>
        )}
        {/* <div className="partial-space"></div>  */}
      </div>
    </section>
  )
}

export default Main;