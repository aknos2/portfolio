import Main from './components/Main/Main';
import { useLocation } from 'react-router-dom';
import OtherProjects from './components/Main/Project/OtherProjects';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const location = useLocation();
  const isProject = location.pathname === '/projects';
  const smoothWrapper = useRef();
  const smoothContent = useRef();

  gsap.registerEffect({
    name: "skewOnScroll",
    effect: (targets, config) => {
      const clamp = gsap.utils.clamp(-5, 5);
      const skewSetter = gsap.quickSetter(targets, "skewY", "deg");

      ScrollSmoother.create({
        wrapper: config.wrapper,
        content: config.content,
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
        onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -500)),
        onStop: () => skewSetter(0),
      });
    },
    extendTimeline: false
  });

  useGSAP(() => {
    if (isProject) {
      gsap.effects.skewOnScroll(".skew-image", {
        wrapper: smoothWrapper.current,
        content: smoothContent.current
      });
     
    }
  }, [isProject]);

  return (
    <div id="smooth-wrapper" ref={smoothWrapper}>
      <div id="smooth-content" ref={smoothContent}>
        <Main isProject={isProject} />
            {isProject && (
              <>
              {/* <div className="partial-space"></div> */}
              <OtherProjects />
              </>
            )}
      </div>
    </div>
  );
}

export default App;

