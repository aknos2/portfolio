import { useEffect, useRef } from "react";
import styles from "./bubbles.module.css";
import { gsap } from "gsap";

function Bubbles({isProject}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    function createBubble() {
      const bubble = document.createElement("div");
      bubble.classList.add(styles.bubble);

      // Random position (vw)
      bubble.style.left = gsap.utils.random(0, 100) + "vw";

      // Random size (px)
      const size = gsap.utils.random(10, 20, 1); // snap to 1px
      bubble.style.width = size + "px";
      bubble.style.height = size + "px";

      // Random animation duration (seconds)
      const animationDuration = gsap.utils.random(15, 20);
      bubble.style.animationDuration = animationDuration + "s";
      bubble.style.opacity = 0;

      container.appendChild(bubble);

      // Fade in / out lifecycle
      const tl = gsap.timeline();
      tl.to(bubble, {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      })
      .to(bubble, {
        opacity: 0,
        duration: 1,
        ease: "power2.in"
      }, animationDuration - 1)
      .call(() => bubble.remove());

      // Random glow chance (40%)
      const shouldGlow = gsap.utils.random([true, true, true, false, true]); 
      if (shouldGlow) {
        const glowTime = gsap.utils.random(animationDuration);

        gsap.delayedCall(glowTime, () => {
          gsap.to(bubble, {
            boxShadow: `
              0 0 18px rgba(255, 220, 180, 0.9),
              0 0 25px rgba(255, 220, 180, 0.8),
              0 0 110px rgba(255, 220, 180, 0.6),
              0 0 70px rgba(255, 220, 180, 0.5),
              0 0 90px rgba(255, 220, 180, 0.4)
            `,
            backgroundColor: "rgba(255, 240, 220, 0.7)",
            filter: "brightness(130%) blur(1px)",
            duration: 1,
            ease: "power2.inOut",
          });
        });
      }
    }

    const interval = setInterval(createBubble, 500);
    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className={styles.container}></div>;
}

export default Bubbles;
