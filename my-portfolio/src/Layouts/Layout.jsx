import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [clickDisabled, setClickDisabled] = useState(false);

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


  return (
    <div className="app-container"> {/* Add wrapper to maintain structure */}
      <Header 
        handleProjects={handleProjects} 
      />
      <main>
       <Outlet />
      </main>
    </div>
  );
}

export default Layout;