import { useEffect, useRef } from "react";
import styles from "./bubbles.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Bubbles() {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const bubblesActiveRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    const MAX_BUBBLES = 20;

    function createBubble() {
      // Don't create bubbles if they should be inactive
      if (!bubblesActiveRef.current) return;

      const currentBubbles = container.querySelectorAll(`.${styles.bubble}`);
      if (currentBubbles.length >= MAX_BUBBLES) {
        return; // Skip creation if at limit
      }

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

      const glowTime = gsap.utils.random(animationDuration);

      gsap.delayedCall(glowTime, () => {
        // Only apply glow if bubbles are still active
        if (bubblesActiveRef.current) {
          gsap.to(bubble, {
            boxShadow: `
              0 0 18px rgba(255, 220, 180, 0.9),
              0 0 25px rgba(255, 220, 180, 0.8),
              0 0 70px rgba(255, 220, 180, 0.5),
              0 0 90px rgba(255, 220, 180, 0.4)
            `,
            backgroundColor: "rgba(255, 240, 220, 0.7)",
            filter: "brightness(130%) blur(1px)",
            duration: 1,
            ease: "power2.inOut",
          });
        }
      });
    }

    
    function stopBubbles() {
      bubblesActiveRef.current = false;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      
      // Fade out all existing bubbles before removing them
      const existingBubbles = container.querySelectorAll(`.${styles.bubble}`);
      existingBubbles.forEach(bubble => {
        gsap.killTweensOf(bubble); // Kill any ongoing animations
        
        // Smooth fade out animation
        gsap.to(bubble, {
          opacity: 0,
          y: -200,
          x: 20,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => bubble.remove()
        });
      });
    }

    function startBubbles() {
      bubblesActiveRef.current = true;
      if (!intervalRef.current) {
        intervalRef.current = setInterval(createBubble, 800);
      }
    }

    // Start bubbles initially
    intervalRef.current = setInterval(createBubble, 800);

    // Store functions for cleanup
    containerRef.current.stopBubbles = stopBubbles;
    containerRef.current.startBubbles = startBubbles;

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useGSAP(() => {
    gsap.to(containerRef.current, {
       opacity: 0,
       scrollTrigger: {
         trigger: document.body,
         start: '50px top',
         end: "200px top",
         ease: 'power1.inOut',
         toggleActions: "play none none reverse",
         onEnter: () => {
           // Stop bubbles when scrolling down past start point
           if (containerRef.current?.stopBubbles) {
             containerRef.current.stopBubbles();
           }
         },
         onLeaveBack: () => {
           // Restart bubbles when scrolling back up past start point
           if (containerRef.current?.startBubbles) {
             containerRef.current.startBubbles();
           }
         }
       }
     }) 
  }, []);

  return <div ref={containerRef} className={styles.container}></div>;
}

export default Bubbles;