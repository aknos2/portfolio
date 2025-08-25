import MyDescription from "./MyDescription";
import WaveContainer from "./WaveContainer";
import Project from './Project';
import Languages from './Languages';
import { useState } from "react";

function Main() {
  const [isProject, setIsProject] = useState(true);

  return (
    <div style={{ position: "relative" }}>
      <WaveContainer />
      {!isProject ? (
        <MyDescription/>
      ) : (
        <Languages />
      )}
      <Project />

    </div>
  )
}

export default Main;