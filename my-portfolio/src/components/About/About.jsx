import Header from '../Header/Header';
import styles from './about.module.css';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import { SplitText } from "gsap/SplitText";
import profileImg from '../../assets/profile-image.JPG';

const AboutNest = () => {
  const title = useRef();

  useGSAP(() => {
    const splitText = SplitText.create(title.current, {
      type: "words",
    });
    gsap.from(splitText.words, {
      opacity: 0,
      x: 70,
      duration: 3,
      ease: "power2.out",
      onComplete: () => splitText.revert(),
    });
  }, []); 

  return (
    <div className={styles.backgroundTitle}>
      <h1 ref={title}>ABOUT</h1>
    </div>
  );
};

function About() {
  const animTextRefs = useRef([]);
  const imgRef = useRef();

  const addToRefs = (el) => {
    if (el && !animTextRefs.current.includes(el)) {
      animTextRefs.current.push(el);
    }
  };

  useGSAP(() => {
    if (animTextRefs.current.length > 0) {
      gsap.fromTo(
        animTextRefs.current,
        { opacity: 0, y: 15,  scale: 0.95 },
        { opacity: 1, y: 0, delay: 1, stagger: 0.1, scale: 1, ease: "power2.out" }
      );
    }

    gsap.fromTo(imgRef.current, {
      opacity: 0,
      y: 40,
    }, {
      opacity: 1,
      y: 20,
      delay: 0.8
    })
  }, []);

  return (
    <>
      <AboutNest />
      <div className={styles.contentWrap}>
        <div className={styles.skillsWrap}>
          <div className={styles.techSkills}>
            <div className={styles.retangleDecoration}></div>
            <h3>Tech Skills</h3>
          </div>
          <hr />
          <div className={styles.skillCategory}>
            <h4 ref={addToRefs}>Frontend</h4>
            <div className={styles.skill}>
              <span ref={addToRefs}>React & JavaScript</span>
            </div>
            <div className={styles.skill}>
              <span ref={addToRefs}>HTML5 & CSS (Flexbox, Grid)</span>
            </div>
            <div className={styles.skill}>
              <span ref={addToRefs}>Animations (GSAP)</span>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h4 ref={addToRefs}>Backend</h4>
            <div className={styles.skill}>
              <span ref={addToRefs}>Node.js & Express</span>
            </div>
            <div className={styles.skill}>
              <span ref={addToRefs}>PostgreSQL & Prisma ORM</span>
            </div>
            <div className={styles.skill}>
              <span ref={addToRefs}>
                Authentication & Security (JWT, Passport)
              </span>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h4 ref={addToRefs}>Deployment & Tools</h4>
            <div className={styles.skill}>
              <span ref={addToRefs}>
                Github, Vercel, Supabase, Render, Netlify
              </span>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h4 ref={addToRefs}>Other</h4>
            <div className={styles.skill}>
              <span ref={addToRefs}>Video editing (Final Cut Pro)</span>
            </div>
            <div className={styles.skill}>
              <span ref={addToRefs}>Music Composing (Logic Pro)</span>
            </div>
          </div>
        </div>

        <div className={styles.imgWrap} ref={imgRef}>
          <img src={profileImg} alt="me"/>
        </div>
      </div>
    </>
  );
}

export default About;