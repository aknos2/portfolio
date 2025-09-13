import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.css'
import ShapeDivider from '../ShapeDivider';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Header({handleProjects}) {
  const location = useLocation();
  const isProject = location.pathname === '/projects';
  const isAbout = location.pathname === '/about';
  const navRef = useRef();

  // useGSAP(() => {
  //   gsap.fromTo(navRef.current, 
  //     {
  //       backgroundColor: 'transparent',
  //       backdropFilter: 'blur(0px)'
  //     }, 
  //     {
  //       backgroundColor: 'rgba(0, 0, 0, 0.3)',
  //       backdropFilter: 'blur(10px)',
  //       duration: 0.3,
  //       ease: 'power1.inOut',
  //       scrollTrigger: {
  //         trigger: document.body,
  //         start: '100px top',
  //         end: '200px top',
  //         scrub: 1,
  //         toggleActions: 'play none none reverse'
  //       }
  //     }
  //   );
  // }, []);

  return (
    <nav ref={navRef}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="https://github.com/aknos2" className={styles.github} target="_blank" rel="noopener noreferrer">
            <p className={styles.navLinks}>aknos2</p>
            <svg viewBox="0 0 98 96">
              <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
            </svg>
          </a>
        </div>
        <ul>
          <li>
            <button onClick={handleProjects}>
              {isProject ? 'home' : 'projects'}
            </button>
          </li>
          <li>
            {!isAbout ? (
              <Link to="/about" className={styles.navLinks}>about</Link>
            ) : (
              <Link to="/" className={styles.navLinks}>home</Link>
            )}
          </li>
        </ul> 
        {/* <ShapeDivider className={styles.shapeDivider} /> */}
      </div>
    </nav>
  )
}

export default Header;