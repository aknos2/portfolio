import { useRef } from "react";
import styles from "./bubbles.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function SmallBubbles() {
  const containerRef = useRef(null);
  const bubblesActiveRef = useRef(true);

  useGSAP(() => {
    const container = containerRef.current;
    if (!bubblesActiveRef.current) return;

    const numBubbles = 7;
    const spacing = 40 / numBubbles; // divide horizontal space

    for (let i = 0; i < numBubbles; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add(styles.bubbleSmall);

      // Horizontal position: evenly spaced + small random offset
      const left = spacing * i + gsap.utils.random(0, spacing - 5);
      bubble.style.left = left + "vw";

      // Random size
      const size = gsap.utils.random(5, 10, 1);
      bubble.style.width = size + "px";
      bubble.style.height = size + "px";

      container.appendChild(bubble);

      // Animate each bubble individually with its own random speed
      gsap.to(bubble, {
        y: gsap.utils.random(-800, -1000), // random vertical movement
        duration: gsap.utils.random(3, 5), // random speed
        opacity: 1,
        ease: "power1.inOut",
        onComplete: () => bubble.remove(),
      });
    }
  }, []);

  return <div ref={containerRef} className={styles.containerSmall}></div>;
}

export default SmallBubbles;
