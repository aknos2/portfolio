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
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useOutletContext } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ProjectNest = ({isProject, setCurrentProject, currentProject, isJapanese}) => {
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
            <Languages isJapanese={isJapanese}/>
            <Project currentProject={currentProject} 
              setCurrentProject={setCurrentProject} 
              isJapanese={isJapanese}
            />
          </div>
         </>
  )
}

function Main({ isProject }) {
  const [currentProject, setCurrentProject] = useState(0);
  const scrollDownMessRef = useRef();
  const { isJapanese } = useOutletContext();

  const watchingProject = projects[currentProject];

  useGSAP(() => {
    if (isProject && scrollDownMessRef.current) {
      gsap.to(scrollDownMessRef.current, {
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: scrollDownMessRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        }
      });
    }
  }, [isProject]); 

  return (
    <section>
      <div className="project-container" style={{ position: "relative" }}>
        <WaveContainer isProject={isProject}/>
        {!isProject ? (
          <MyDescription isJapanese={isJapanese}/>
        ) : (
          <>
          <ProjectNest 
            isProject={isProject} 
            watchingProject={watchingProject} 
            setCurrentProject={setCurrentProject} 
            currentProject={currentProject} 
            isJapanese={isJapanese}
          />
          <div className='scroll-down-message' ref={scrollDownMessRef}>
            <div className="scrolldown-left"></div>
            <p>other projects</p>
          </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Main;