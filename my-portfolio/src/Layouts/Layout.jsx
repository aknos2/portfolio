import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import ShapeDivider from '../components/ShapeDivider.jsx'
import { useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [clickDisabled, setClickDisabled] = useState(false);
  const dividerRef = useRef();
  
  const isProject = location.pathname === '/projects';

  const handleProjects = () => {
    if (clickDisabled) return;

    setClickDisabled(true);
    
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
        backgroundColor: "var(--shapeDivider-bg-color)",
        duration: 0.5,
      });
    }
  }, { dependencies: [isProject] });

  return (
    <div className="app-container"> {/* Add wrapper to maintain structure */}
      <ShapeDivider turnLightRef={dividerRef} />
      <Header isProject={isProject} handleProjects={handleProjects} />
      <Outlet />
    </div>
  );
}

export default Layout;