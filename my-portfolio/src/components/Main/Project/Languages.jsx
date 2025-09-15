import styles from '../css/languages.module.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useRef } from 'react';
import { mainProject } from '../../../data/projects';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(useGSAP, SplitText);

const Nested = ({isJapanese}) => {
  const { t } = useTranslation();
  const listRef = useRef();
  const titleRef = useRef();

  //Gather technologies, filter out falsy values
  const technologies = [
    mainProject[0].frontend,
    mainProject[0].backend,
    mainProject[0].database,
    mainProject[0].authentication
  ].filter(Boolean);

  useGSAP(() => {
    // Only animate the list items, not the title
    const split = SplitText.create(listRef.current, {
      type: "words",
    });

    gsap.from(split.words, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 2,
      delay: 1.5,
      ease: "power2.out",
      onComplete: () => split.revert()
    });

    // Separate animation for title - no SplitText
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1.3,
      ease: "power2.out"
    });

  }, [isJapanese]);

  return (
    <div className={styles.splitText}>
      <h3 ref={titleRef}>{t('built_with')}</h3>
      <ul ref={listRef}>
        {technologies.map((tech, index) => (
          <li key={`${tech}-${index}`}>
            <span>{tech}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Languages({ isJapanese }) {
  return (
    <div className={styles.container}>
      <Nested isJapanese={isJapanese}/>
    </div>
  )
}

export default Languages;