import { useContext, useRef } from "react";
import styles from "./css/MyDescription.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import SmallBubbles from "../Animations/BubblesSmall";
import { useTranslation } from "react-i18next";
import i18n from "../../data/i18n";
import MediaQueryContext from "../../Layouts/MediaQueryContext";

gsap.registerPlugin(useGSAP, SplitText);

function MyDescription() {
  const containerRef = useRef(null);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const thirdTextRef = useRef(null); 
  const { t } = useTranslation();

  const { isMobileDescription, isTablet } = useContext(MediaQueryContext)

  const firstTextKey = "myDescription.firstText";
  const secondTextKey = "myDescription.secondText";
  const secondTextKeyMobile = "myDescription.secondTextMobile";
  const thirdTextKeyMobile = "myDescription.thirdTextMobile";

  useGSAP(() => {
    const firstSplit = new SplitText(firstTextRef.current, {
      type: "chars",
      charsClass: styles.letter,
    });

    const secondSplit = new SplitText(secondTextRef.current, {
      type: "chars",
      charsClass: styles.letter,
    });

    let thirdSplit;
    if ((isMobileDescription || isTablet) && thirdTextRef.current) {
      thirdSplit = new SplitText(thirdTextRef.current, {
        type: "chars",
        charsClass: styles.letter,
      });
    }

    const addSparkles = (chars) => {
      chars.forEach((char) => {
        if (char.textContent.trim() !== "") {
          const sparkle = document.createElement("span");
          sparkle.className = styles.sparkle;
          sparkle.innerHTML = "✨";
          char.appendChild(sparkle);
        }
      });
    };

    addSparkles(firstSplit.chars);
    addSparkles(secondSplit.chars);
    if (thirdSplit) addSparkles(thirdSplit.chars);

    const allChars = (isMobileDescription || isTablet)
      ? [...firstSplit.chars, ...secondSplit.chars, ...(thirdSplit? thirdSplit.chars : [])]
      : [...firstSplit.chars, ...secondSplit.chars];

    const tl = gsap.timeline();
    allChars.forEach((char, i) => {
      const sparkle = char.querySelector(`.${styles.sparkle}`);
      tl.fromTo(
        char,
        { opacity: 0, y: 5 },
        { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" },
        i * 0.04
      );

      if (sparkle && char.textContent.trim() !== "") {
        tl.fromTo(
          sparkle,
          { opacity: 0, scale: 0, rotation: 0 },
          {
            opacity: 1,
            scale: 0.5,
            rotation: 180,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: "back.out(1.7)",
          },
          i * 0.04 + 0.2
        );
      }
    });

    return () => {
      firstSplit.revert();
      secondSplit.revert();
      if (thirdSplit) thirdSplit.revert();
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={styles.container}>
      <SmallBubbles />
      <span ref={firstTextRef} className={`${styles.typingEffect} ${
                  i18n.language === "ja" && isMobileDescription? styles.jpText : styles.enText }`}>
        {t(firstTextKey)}
      </span>

      {!isMobileDescription && !isTablet ? (
        <span ref={secondTextRef} className={styles.typingEffect}>
          {t(secondTextKey)}
        </span>
      ) : (
        <>
          <span ref={secondTextRef} 
                className={`${styles.typingEffect} ${styles.mobileFirstLine} ${
                  i18n.language === "ja" ? styles.jpText : styles.enText }`}
                >
            {t(secondTextKeyMobile)}
          </span>
          <span ref={thirdTextRef} 
                 className={`${styles.typingEffect} ${styles.mobileSecondLine} ${
                  i18n.language === "ja" ? styles.jpText : styles.enText }`}
                >
            {t(thirdTextKeyMobile)}
          </span>
        </>
      )}
    </div>
  );
}

export default MyDescription;
