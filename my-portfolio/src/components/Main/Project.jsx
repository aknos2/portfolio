import styles from './css/project.module.css';
import { useState } from 'react';
import { projects } from '../../data/projects';

function Project({currentProject, setCurrentProject}) {
  const [isSliding, setIsSliding] = useState(false);
  const totalProjects = projects.length;
  const watchingProject = projects[currentProject];

  const goToNextPage = () => {
    if (currentProject < totalProjects - 1) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentProject(prev => prev + 1);
        setIsSliding(false);
      }, 550);
    }
  }

   const goToPreviousPage = () => {
    if (currentProject > 0) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentProject(prev => prev - 1);
        setIsSliding(false);
      }, 550);
    }
  }

  return (
    <>
    <div className="backdrop">
      <div className={styles.container}>
        <h1>PROJECTS</h1>
        <div className={`${styles.contentWrap}`}>
          <div className={`${styles.content} ${isSliding ? styles.sliding : ""}`}>
            <h2>{watchingProject.title}</h2>
            <div className={styles.imageWrap}>
              <img src={watchingProject.img.high} 
                  alt={watchingProject.title}
                  srcSet={`${watchingProject.img.low} 480w, ${watchingProject.img.high} 1080w`}
                  sizes="(max-width: 600px) 480px, 1080px"
                  >
              </img>
            </div>
            <div className={styles.description}>
              <p>{watchingProject.description}</p>
            </div>
          </div>
          {currentProject < totalProjects - 1 && (
            <button className={styles.nextArrow} onClick={goToNextPage} aria-label="Next page">
              <svg height="24px" viewBox="0 -960 960 960" width="25px" fill="#ffffffff">
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
              </svg>
            </button>
          )}
          {currentProject > 0 && (
            <button className={styles.previousArrow} onClick={goToPreviousPage} ariaLabel="Previous page">
              <svg height="24px" viewBox="0 -960 960 960" width="25px" fill="#ffffffff">
                <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
              </svg>
            </button>
          )}
        </div>
      </div>

    </div>
    </>
  )
}


export default Project;