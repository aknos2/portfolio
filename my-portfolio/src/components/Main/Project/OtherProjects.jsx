import styles from "../css/otherProjects.module.css";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import { projects } from "../../../data/projects";
import backgroundVideo from '../../../assets/underwater.mp4'
import BubbleOverlay from "./BubbleOverlay";
import Footer from "../../Footer/Footer";

gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);

const GithubIcon = ({link}) => {
  return (
    <a href={link} className={styles.link} target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 98 96" className={styles.github}>
        <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
      </svg>
    </a>
  )
}

const WebsiteUrl = ({link}) => {
  return (
    <a href={link} className={styles.newTab} target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 -960 960 960">
        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
      </svg>
    </a>
  )
}

const ProjectsA = ({title, description, imgHigh, imgLow, languageIndex, url, github, invertSide=false, content}) => {
  const containerRef = useRef();
  const titleRefRight = useRef();
  const titleRefLeft = useRef();
  const textRef = useRef();
  const languagesRefRight = useRef();
  const languagesRefLeft = useRef();
  const imageRef = useRef();
  const titleBanner = useRef();
  const descriptionRef = useRef();

  useGSAP(() => {
    const textSplit = SplitText.create(textRef.current, {
      type: "lines"
    });
    const descriptionSplit = SplitText.create(descriptionRef.current, {
      type: "lines"
    });
    const languageSplit = SplitText.create(
      invertSide ? languagesRefLeft.current : languagesRefRight.current, 
      { type: 'words' }
    );

    // Set initial states 
    gsap.set([
      imageRef.current,
      titleBanner.current,
      invertSide ? titleRefLeft.current : titleRefRight.current,
      textSplit.lines,
      descriptionSplit.lines,
      languageSplit.words
    ], {
      opacity: 0
    });

    // Set initial transforms
    gsap.set(invertSide ? titleRefLeft.current : titleRefRight.current, {
      x: invertSide ? -50 : 50
    });
    gsap.set([textSplit.lines, descriptionSplit.lines], { y: 30 });
    gsap.set(languageSplit.words, { y: 20 }); 

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%", 
        end: "top 50%",  
        toggleActions: "play none none reverse", // Better performance than scrub
      },
      onComplete: () => {
        textSplit.revert();
        descriptionSplit.revert();
        languageSplit.revert();
      },
    });

    timeline
      .to(imageRef.current, {
        opacity: 1,
        duration: 0.8, 
        ease: "power2.out",
      })
      .to(titleBanner.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power1.out"
      }, "-=0.6")
      .to(invertSide ? titleRefLeft.current : titleRefRight.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      }, "-=0.4")
      .to(textSplit.lines, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8, 
        ease: "power1.out",
      }, '-=0.8')
      .to(descriptionSplit.lines, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power1.out",
      }, '-=0.6')
      .to(languageSplit.words, {
        opacity: 1,
        y: 0,
        stagger: 0.05, 
        duration: 0.6,
        ease: "power2.out",
      }, '-=0.8');
    
  }, []);

  return (
    <section>
      <div className={`${styles.container} ${invertSide ? styles.invertSideContainer : ""}`} ref={containerRef}>
        <div className={styles.imageWrap} ref={imageRef} data-speed="1">
          <img src={imgHigh} 
              className={`${invertSide ? styles.invertImg : ""} skew-image`}
              srcSet={`${imgLow} 480w, ${imgHigh} 1080w`}
              sizes="(max-width: 600px) 480px, 1080px"
              loading="lazy" // Add lazy loading for performance
              />
          <div className={styles.languageLinkWrap}>
            <div className={`${styles.links} ${invertSide ? styles.invertLinks : ""}`}>
              <WebsiteUrl link={url} />
              <GithubIcon link={github}/>
            </div>

            <div className={`${styles.languages} ${invertSide ? styles.leftSideUl : styles.rightSideUl}`} 
                 ref={invertSide ? languagesRefLeft : languagesRefRight} data-speed="1">
              <h3>Built with</h3>
              <ul className={styles.rightSideUl}>
                {languageIndex.languages.map((language, idx) => (
                  <li key={idx}>
                    {invertSide ? <span>- {language}</span> : <span>{language} -</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.description} data-speed="1.08">
          <div className={styles.titleDescriptionWrap} ref={titleBanner}>
            <h2 ref={invertSide ? titleRefLeft : titleRefRight} className={styles.rightSideTitle}>
              {title}
            </h2>
            <p ref={textRef}>{description}</p>
          </div>
          <div className={styles.descriptionContent} ref={descriptionRef}>
            {content.split("\n").map((paragraph, i) => (
              <p key={i}>{paragraph.trim()}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function OtherProjects() {
  const containerRef = useRef(null);
  const scrollableRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Batch animate all project containers at once for better performance
      ScrollTrigger.batch(".project-container", {
        onEnter: (elements) => {
          gsap.fromTo(elements, {
            opacity: 0,
          }, {
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            overwrite: "auto"
          });
        },
        start: "top 85%",
        once: true, // Only animate once for better performance
      });

      const scrollable = scrollableRef.current;
      const container = containerRef.current;

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: () => "+=" + (scrollable.scrollHeight - window.innerHeight),
        pin: true,
        onUpdate: self => {
          gsap.to(scrollable, {
            y: -((scrollable.scrollHeight - window.innerHeight) * self.progress),
            overwrite: "auto",
            duration: 0.1, // Very short duration for smooth scrolling
            ease: "none"
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);


  return (
    <section>
      <div className={styles.otherProjectsSection} ref={containerRef}>
        <div className={styles.videoBackground}>
          <video autoPlay loop muted playsInline className={styles.video}>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <BubbleOverlay />
        </div>

        {/* Content over the video */}
        <div
          className={styles.content}
          ref={scrollableRef}
        >
          {/* <div className="partial-space"></div> */}
          <ProjectsA 
            title={projects[1].title}
            description={projects[1].description}
            url={projects[1].url}
            github={projects[1].github}
            imgHigh={projects[1].img.high}
            imgLow={projects[1].img.low}
            languageIndex={projects[1]}
            content={projects[1].content}
          />
          <ProjectsA 
            title={projects[2].title}
            description={projects[2].description}
            url={projects[2].url}
            github={projects[2].github}
            imgHigh={projects[2].img.high}
            imgLow={projects[2].img.low}
            languageIndex={projects[2]}
            content={projects[2].content}
            invertSide
          />
          <ProjectsA 
            title={projects[3].title}
            description={projects[3].description}
            url={projects[3].url}
            github={projects[3].github}
            imgHigh={projects[3].img.high}
            imgLow={projects[3].img.low}
            languageIndex={projects[3]}
            content={projects[3].content}
          />
        
        </div>
      </div>
    </section>
    
  )
}

export default OtherProjects;