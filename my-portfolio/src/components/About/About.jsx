import Header from '../Header/Header';
import styles from './about.module.css';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from 'react';
import { SplitText } from "gsap/SplitText";
import profileImg from '../../assets/profile-image.JPG';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutNest = () => {
  const title = useRef();

  useGSAP(() => {
    const splitText = SplitText.create(title.current, {
      type: "words",
    })
    gsap.from(splitText.words, {
      opacity: 0,
      x: 70,
      duration: 3,
      ease: "power2.out",
      onComplete: () => splitText.revert()
    })


  }, []);

  return (
        <>
          <div className='project-background-title'><h1 ref={title}>ABOUT</h1></div>
         
         </>
  )
}

function About() {
  const location = useLocation();
  const navigate = useNavigate();
  const [clickDisabled, setClickDisabled] = useState(false);

  
  const isProject = location.pathname === '/projects';

  const handleProjects = () => {
    if (clickDisabled) return;
    setClickDisabled(true);
    navigate('/projects');
    setTimeout(() => setClickDisabled(false), 2000);
  };
  
  return (
    <>
      <Header isProject={isProject} handleProjects={handleProjects} />
      <AboutNest />
        <div className={styles.contentWrap}>
          {/* <div className={styles.description}>
            <p>My journey started in March 2024. I decided to change my profession from
              a web search engineer to a web developer. Started studying coding with the help of websites
              such as W3Schools, freeCodeCamp, javascript.info. Finished The Odin Project course in 2025.
            </p>
          </div> */}
      <div className={styles.skillsWrap}>
        <div className={styles.techSkills}>
          <div className={styles.retangleDecoration}></div>
          <h3>Tech Skills</h3>
        </div>
        <hr />
        <div className={styles.skillCategory}>
          <h4>Frontend</h4>
          <div className={styles.skill}>
            <span>React & JavaScript</span>
          </div>
          <div className={styles.skill}>
            <span>HTML5 & CSS (Flexbox, Grid)</span>
          </div>
          <div className={styles.skill}>
            <span>Animations (GSAP)</span>
          </div>
        </div>

        <div className={styles.skillCategory}>
          <h4>Backend</h4>
          <div className={styles.skill}>
            <span>Node.js & Express</span>
          </div>
          <div className={styles.skill}>
            <span>PostgreSQL & Prisma ORM</span>
          </div>
          <div className={styles.skill}>
            <span>Authentication & Security (JWT, Passport)</span>
          </div>
        </div>

        <div className={styles.skillCategory}>
          <h4>Deployment & Tools</h4>
          <div className={styles.skill}>
            <span>Github, Vercel, Supabase, Render, Netlify</span>
          </div>
        </div>

        <div className={styles.skillCategory}>
          <h4>Other</h4>
          <div className={styles.skill}>
            <span>Video editing (Final Cut Pro)</span>
          </div>
          <div className={styles.skill}>
            <span>Music Composing (Logic Pro)</span>
          </div>
        </div>
      </div>

          <div className={styles.imgWrap}>
            <img src={profileImg} alt='me'></img>
          </div>
        </div>



    </>
  )
}

export default About;