import { useLocation } from 'react-router-dom';
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import './components/Main/css/main.css';
import MyDescription from './components/Main/MyDescription';
import WaveContainer from './components/Main/WaveContainer';
import Project from './components/Main/Project/Project';
import Languages from './components/Main/Project/Languages';
import OtherProjects from './components/Main/Project/OtherProjects';
import { projects } from './data/projects';

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
  }, [isProject]);

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

function App() {
  const location = useLocation();
  const isProject = location.pathname === '/projects';
  const [currentProject, setCurrentProject] = useState(0);

  const watchingProject = projects[currentProject];

  return (
    <div className="project-container" style={{ position: "relative" }}>
      <WaveContainer isProject={isProject}/>
      {!isProject ? (
        <MyDescription/>
      ) : (
        <>
        <ProjectNest isProject={isProject} watchingProject={watchingProject} setCurrentProject={setCurrentProject} currentProject={currentProject}/>
        <div className="partial-space"></div>
        <OtherProjects />
        </>
      )}
    </div>
  );
}

export default App;