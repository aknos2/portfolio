import { useRef } from 'react';
import '../css/bubble-overlay.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BubbleOverlay() {
  const containerRef = useRef();

  useGSAP(() => {
  const bubbles = gsap.utils.toArray('.bubble-color');
 
  gsap.set(".bubble-color", { opacity: 0 });

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: 'bottom 20%',
      end: 'bottom 80%',
      ease: "power1.inOut",
      scrub: 1,
    }
  });

  timeline.to(".bubble-color", {
    opacity: 1,
    duration: 1,
    ease: "power1.out",
  });

   bubbles.forEach((bubble, i) => {
      gsap.to(bubble, {
        y: gsap.utils.random(-30, 30),
        duration: gsap.utils.random(3, 6),
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: i * 0.5, // stagger starts
      });
    });
}, []);


  return (
    <div className="bubble-overlay" ref={containerRef}>
      <div className='bubble1 bubble-color'></div>
      <div className='bubble2 bubble-color'></div>
      <div className='bubble3 bubble-color'></div>
      <div className='bubble4 bubble-color'></div>
      <div className='bubble5 bubble-color'></div>
    </div>
  )
}

export default BubbleOverlay;
