import Main from './components/Main/Main';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isProject = location.pathname === '/projects';

  return <Main isProject={isProject} />;
}

export default App;