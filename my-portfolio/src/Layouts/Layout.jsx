import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import { useState, Suspense } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MediaQueryProvider } from './MediaQueryContext.jsx';


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
    <MediaQueryProvider> 
      <div className="app-container"> {/* Add wrapper to maintain structure */}
        <Header 
          handleProjects={handleProjects} 
        />
        <Suspense fallback={<h1>Loading...</h1>}>
          <main>
          <Outlet />
          </main>
        </Suspense>
      </div>
    </MediaQueryProvider>
  );
}

export default Layout;