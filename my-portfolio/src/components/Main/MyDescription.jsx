import { useState, useEffect } from 'react';
import styles from './css/MyDescription.module.css';

function MyDescription() {
  const firstText = "Hello, I'm an aspiring front-end developer";
  const secondText = "My goal is to create beautiful, artistic, efficient interfaces";

  const [firstLetters, setFirstLetters] = useState([]);
  const [secondLetters, setSecondLetters] = useState([]);
  const [startFirst, setStartFirst] = useState(false);
  const [startSecond, setStartSecond] = useState(false);

  useEffect(() => {

    const chars1 = firstText.split('').map((char, index) => ({
      char,
      delay: index * 25,
    }));
    setFirstLetters(chars1);

    const chars2 = secondText.split('').map((char, index) => ({
      char,
      delay: index * 25,
    }));
    setSecondLetters(chars2);

    setTimeout(() => {
      setStartFirst(true);
    }, 500);

    // Start second phrase animation AFTER first finishes
    const totalDurationFirst = chars1.length * 25 + 500; // extra buffer
    setTimeout(() => {
      setStartSecond(true);
    }, totalDurationFirst);

  }, [firstText, secondText]);

  return (
    <div className={styles.container}>
      <span className={styles.typingEffect}>
        {firstLetters.map(({ char, delay }, index) => (
          <span
            key={`f-${index}`}
            className={`${styles.letter} ${startFirst ? styles.letterVisible : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
          >
            {char}
          </span>
        ))}
      </span>

      <span className={styles.typingEffect}>
        {secondLetters.map(({ char, delay }, index) => (
          <span
            key={`s-${index}`}
            className={`${styles.letter} ${startSecond ? styles.letterVisible : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
          >
            {char}
          </span>
        ))}
      </span>
    </div>
  );
}

export default MyDescription;
