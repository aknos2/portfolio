import styles from './about.module.css';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useContext, useRef } from 'react';
import { SplitText } from "gsap/SplitText";
import profileImg from '../../assets/profile-image.JPG';
import { useTranslation } from 'react-i18next';
import MediaQueryContext from '../../Layouts/MediaQueryContext';

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
    <div className={`${styles.backgroundTitle} no-select`}>
      <h1 ref={title}>ABOUT</h1>
    </div>
  );
};

function About() {
  const animTextRefs = useRef([]);
  const imgRef = useRef();
  const { t } = useTranslation();
  const { isMobile } = useContext(MediaQueryContext);

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
            <h3>{t('tech_skill')}</h3>
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
              <span ref={addToRefs}>{t('animation')} (GSAP)</span>
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
                {t('security')} (JWT, Passport)
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
            <div className={`${styles.skill} ${styles.musicComposing}`}>
              <span ref={addToRefs}>{t('music_composing')} (Logic Pro)</span>
              <a href="https://www.youtube.com/@fireinthepool5590" target="_blank" rel="noopener noreferrer">
                <div className={styles.youtubeWrap} ref={addToRefs}> 
                  <svg viewBox="0 0 48 48" width="50px" height="50px"><path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/>
                    <path fill="#FFF" d="M20 31L20 17 32 24z"/>
                  </svg>
                  <p>{t("visit_youtube")}</p>
                </div>
              </a>
            </div>
            <div className={styles.skill}>
              <span ref={addToRefs}>{t('video_editing')} (Final Cut Pro)</span>
            </div>
          </div>
           {isMobile && (
           <a ref={addToRefs} href="mailto:eltonryuji@gmail.com" className={styles.mobileEmail}>eltonryuji@gmail.com</a>
           )}
        </div>

        <div className={`${styles.imgWrap} no-select`} ref={imgRef}>
          {!isMobile && (
           <a a href="mailto:eltonryuji@gmail.com">eltonryuji@gmail.com</a>
          )}
          <img src={profileImg} alt="me"/>
        </div>
      </div>
    </>
  );
}

export default About;