import styles from '../css/project.module.css';
import { useState } from 'react';
import { mainProject } from '../../../data/projects';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import { SplitText } from 'gsap/all';
import { useTranslation } from 'react-i18next';

function Project({currentProject, setCurrentProject }) {
  const [isSliding, setIsSliding] = useState(false);
  const container = useRef();
  const imageRef = useRef();
  const textRef = useRef();
  const { i18n } = useTranslation();

  const watchingProject = mainProject[currentProject];
  const totalPages = mainProject.length;

  useGSAP(() => {
      gsap.from(container.current, {
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: "power2.out"
      });
  }, []);

  useGSAP(() => {
    const textSplit = SplitText.create(textRef.current, {
      type: "lines"
    })

     gsap.from(imageRef.current, {
      opacity: 0,
      duration: 2,
      ease: "power2.out"
    });
    gsap.from(textSplit.lines, {
      opacity: 0,
      y: 20,
      stagger: 0.3,
      duration: 1.5,
      ease: "expo.out",

      onComplete: () => textSplit.revert()
    });
  }, [currentProject]);


  const goToNextPage = () => {
    if (isSliding) return;

    if (currentProject < totalPages - 1) {
      setIsSliding(true);
      setCurrentProject(prev => prev + 1);

      setTimeout(() => setIsSliding(false), 2000);
    }
  }

   const goToPreviousPage = () => {
     if (isSliding) return;

    if (currentProject > 0) {
      setIsSliding(true);
      setCurrentProject(prev => prev - 1);

      setTimeout(() => setIsSliding(false), 2000)
    }
  }

  return (
    <section>
      <div className={styles.container} ref={container}>
    
        <div className={styles.contentWrap}>
          <div className={`${styles.content}`}>
            <div className={styles.title}>
              <h2>{watchingProject.title}</h2>
            </div>

            <div className={`${styles.imageWrap} no-select`} ref={imageRef}>
              <img src={watchingProject.img.high} 
                  alt={watchingProject.title}
                  srcSet={`${watchingProject.img.low} 480w, ${watchingProject.img.high} 1080w`}
                  sizes="(max-width: 600px) 480px, 1080px"
                  className={currentProject === 2 ? styles.thirdImage : ""}
                  >
              </img>
              <a href={watchingProject.github} className={styles.github} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 98 96">
                  <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"/>
                </svg>
              </a>
              <a href={watchingProject.url} className={styles.newTab} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 -960 960 960">
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
                </svg>
              </a>
            </div>

            <div className={styles.description}>
              <p ref={textRef}>
                {watchingProject.description[i18n.language] || watchingProject.description.en}
              </p>
            </div>
          </div>
          
          {currentProject < totalPages - 1 && (
            <button className={styles.nextArrow} onClick={goToNextPage} aria-label="Next page">
              <svg height="24px" viewBox="0 -960 960 960" width="25px" fill="#ffffffff">
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
              </svg>
            </button>
          )}
          {currentProject > 0 && (
            <button className={styles.previousArrow} onClick={goToPreviousPage} aria-label="Previous page">
              <svg height="24px" viewBox="0 -960 960 960" width="25px" fill="#ffffffff">
                <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}


export default Project;