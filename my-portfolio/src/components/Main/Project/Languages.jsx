import styles from '../css/languages.module.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, SplitText);

const Nested = ({ watchingProject, title }) => {
  const list = useRef();

  // Gather technologies, filter out falsy values
  const technologies = [
    watchingProject.frontend,
    watchingProject.backend,
    watchingProject.database,
    watchingProject.authentication
  ].filter(Boolean);

  useGSAP(() => {
    // Target only spans inside li (React still owns the li elements)
    const split = SplitText.create(list.current.querySelectorAll("span"), {
      type: "words",
    });

    gsap.from(split.words, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 2,
      ease: "power2.out",
      onComplete: () => split.revert()
    });

  }, { dependencies: [watchingProject.id] });

  return (
    <div className={styles.splitText} ref={title}>
      <h3>Built with</h3>
      <ul ref={list}>
        {technologies.map((tech, index) => (
          <li key={`${watchingProject.id}-${index}`}>
            <span>{tech}</span> {/* Only animate span, not li */}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Languages({ watchingProject, title }) {
  return (
    <div className={styles.container}>
      <Nested watchingProject={watchingProject} title={title}/>
    </div>
  )
}

export default Languages;
