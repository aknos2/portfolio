import { useRef, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ShapeDivider from './components/ShapeDivider';
import './styles/root.css';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  const [clickDisabled, setClickDisabled] = useState(false);
  const dividerRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const isProject = location.pathname === "/projects";

  const handleProjects = () => {
    if (clickDisabled) return;

    if (isProject) {
      navigate('/');
    } else {
      navigate('/projects');
    }

    setTimeout(() => setClickDisabled(false), 2000);
  };

  // Animate when isProject changes
  useGSAP(() => {
    if (isProject) {
      gsap.to(dividerRef.current, {
         keyframes: [
          { backgroundColor: "#4c4c4ca3", duration: 0.5 },
          { backgroundColor: "#83838395", duration: 0.5 },
        ],
        duration: 1,
        repeat: 1, 
        yoyo: true,
      });
    } else {
      gsap.to(dividerRef.current, {
        backgroundColor: "var(--shapeDivider-bg-color)", // reset
        duration: 0.5,
      });
    }
  }, { dependencies: [isProject] });

  return (
    <>
      <ShapeDivider turnLightRef={dividerRef} />
      <Header isProject={isProject} handleProjects={handleProjects} />
      <Main isProject={isProject} />
    </>
  );
}

export default App;
