import wave from './css/waveContainer.module.css';
import styles from './css/myName.module.css'
import waves from '../../assets/waves.mp4';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import { useRef } from "react";
import Bubbles from '../Animations/Bubbles';

gsap.registerPlugin(useGSAP, Flip);

const MyName = ({ slots }) => {
  const titleRef = useRef(null);
  const languageRef = useRef(null);

  return (
    <div className={`${styles.container} no-select`}>
      <div className={styles.profileWrap}>
        <div className={styles.profileFirstName} ref={slots.firstName}></div>
        <div className={styles.profileLastName} ref={slots.lastName}></div>

        <div className={styles.profileTitle} ref={titleRef}>
          <p className="box">Web Developer</p>
        </div>
        <div className={styles.profileLanguage} ref={languageRef}>
          <p className="box">React Javascript</p>
        </div>
      </div>
    </div>
  )
}

const SecondMyNameContainer = ({ slots }) => {
  return (
    <div className={`${styles.secondContainer} no-select`}>
      <div className={styles.firstName} ref={slots.firstName}></div>
      <div className={styles.lastName} ref={slots.lastName}></div>
    </div>
  )
}

function WaveContainer({ isProject }) {
  // Moving elements
  const elements = {
    firstName: useRef(null),
    lastName: useRef(null),
  };

  // Slots
  const myNameSlots = {
    firstName: useRef(null),
    lastName: useRef(null),
  };

  const secondSlots = {
    firstName: useRef(null),
    lastName: useRef(null),
  };

  // Render actual movable nodes once
  const renderMovables = () => {
    return (
      <>
        <div ref={elements.firstName}><h1>Elton</h1></div>
        <div ref={elements.lastName}><h1>Tomiyoshi</h1></div>
      </>
    );
  };

  useGSAP(() => {
    const keys = Object.keys(elements);
    const titleElements = document.querySelectorAll(`.${styles.profileTitle}, .${styles.profileLanguage}`);
    const tl = gsap.timeline();

    if (isProject) {
      // Sequence: fade out → flip
      tl.to(titleElements, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out"
      })
      .call(() => {
        // Setup flip after fade completes
        const state = Flip.getState(keys.map(k => elements[k].current));
        keys.forEach(k => {
          secondSlots[k].current.appendChild(elements[k].current);
        });
        
        Flip.from(state, {
          duration: 1.2,
          ease: "power2.inOut",
          absolute: true
        });
      });

    } else { 

       // Setup flip after fade completes
      const state = Flip.getState(keys.map(k => elements[k].current));
      keys.forEach(k => {
        myNameSlots[k].current.appendChild(elements[k].current);
      });
      
      Flip.from(state, {
        duration: 1.2,
        ease: "power2.inOut",
        absolute: true,
      })
      .call(() => {
        // Sequence: fade in → flip
        tl.to(titleElements, {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.5
        })
      });
    }

  }, { dependencies: [isProject] });

  return (
    <div className={wave.container}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={wave.videoBackground}
        preload="auto" 
        fetchPriority="high" 
      >
        <source src={waves} type="video/mp4" />
      </video>

      {/* Destination container for project mode */}
      <SecondMyNameContainer slots={secondSlots} />

      <div className={wave.content}>
        <MyName slots={myNameSlots} />
      </div>

      <div className={wave.bubbleContainer}>
        <Bubbles isProject={isProject}/>
      </div>

     

      {/* Render the real nodes */}
      {renderMovables()}
    </div>
  )
}

export default WaveContainer;