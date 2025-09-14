import styles from '../css/languages.module.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useRef } from 'react';
import { mainProject } from '../../../data/projects';

gsap.registerPlugin(useGSAP, SplitText);

const Nested = () => {
  const list = useRef();

  //Gather technologies, filter out falsy values
  const technologies = [
    mainProject[0].frontend,
    mainProject[0].backend,
    mainProject[0].database,
    mainProject[0].authentication
  ].filter(Boolean);

  useGSAP(() => {
    // Target only spans inside li (React still owns the li elements)
    const split = SplitText.create(list.current, {
      type: "words",
    });

    gsap.from(split.words, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 2,
      delay:1.5,
      ease: "power2.out",
      onComplete: () => split.revert()
    });

  }, []);

  return (
    <div className={styles.splitText}  ref={list}>
      <h3>Built with</h3>
      <ul>
        {technologies.map((tech, index) => (
          <li key={`${technologies.id}-${index}`}>
            <span>{tech}</span> {/* Only animate span, not li */}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Languages() {
  return (
    <div className={styles.container}>
      <Nested />
    </div>
  )
}

export default Languages;
