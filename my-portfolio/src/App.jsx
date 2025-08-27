import { useState } from 'react';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import ShapeDivider from './components/ShapeDivider'
import './styles/root.css'

function App() {
  const [isProject, setIsProject] = useState(false);

  const handleProjects = () => {
    setIsProject(prev => !prev);
  }

  return (
    <>
      <ShapeDivider />
      <Header isProject={isProject} handleProjects={handleProjects}/>
      <Main isProject={isProject}/>
    </>
  )
}

export default App
