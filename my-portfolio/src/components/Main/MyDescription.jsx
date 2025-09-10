import { useRef } from "react";
import styles from "./css/MyDescription.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import SmallBubbles from "../Animations/BubblesSmall";

gsap.registerPlugin(useGSAP, SplitText);

function MyDescription() {
  const containerRef = useRef(null);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);

  const firstText = "Hello, I'm a front-end developer and designer";
  const secondText = "My focus is on building artistic, user-friendly, and efficient interfaces";

  useGSAP(() => {
    // Create SplitText instances for both text elements
    const firstSplit = new SplitText(firstTextRef.current, { 
      type: "chars",
      charsClass: styles.letter
    });
    
    const secondSplit = new SplitText(secondTextRef.current, { 
      type: "chars",
      charsClass: styles.letter
    });

    // Add sparkles to non-space characters
    const addSparkles = (chars) => {
      chars.forEach(char => {
        if (char.textContent.trim() !== '') {
          const sparkle = document.createElement('span');
          sparkle.className = styles.sparkle;
          sparkle.innerHTML = '✨';
          char.appendChild(sparkle);
        }
      });
    };

    // Add sparkles to both sets of characters
    addSparkles(firstSplit.chars);
    addSparkles(secondSplit.chars);

    // Get all characters from both text elements
    const allChars = [...firstSplit.chars, ...secondSplit.chars];

    // Timeline for letters
    const tl = gsap.timeline();

    allChars.forEach((char, i) => {
      const sparkle = char.querySelector(`.${styles.sparkle}`);

      // Animate letter first
      tl.fromTo(
        char,
        { opacity: 0, y: 5 },
        { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" },
        i * 0.04 // stagger manually
      );

      // Only animate sparkle if it exists and the letter is not a space
      if (sparkle && char.textContent.trim() !== '') {
        tl.fromTo(
          sparkle,
          { 
            opacity: 0, 
            scale: 0,
            rotation: 0
          },
          { 
            opacity: 1, 
            scale: 0.5, 
            rotation: 180,
            duration: 0.5, 
            yoyo: true, 
            repeat: 1, 
            ease: "back.out(1.7)" 
          },
          i * 0.04 + 0.2 // Start sparkle slightly after letter appears
        );
      }
    });

    // Cleanup function to revert SplitText
    return () => {
      firstSplit.revert();
      secondSplit.revert();
    };
  }, { scope: containerRef });

  return (
    <>
    <div ref={containerRef} className={styles.container}>
      <SmallBubbles />
      <span ref={firstTextRef} className={styles.typingEffect}>
        {firstText}
      </span>
      <span ref={secondTextRef} className={styles.typingEffect}>
        {secondText}
      </span>
    </div>
    </>
  );
}

export default MyDescription;