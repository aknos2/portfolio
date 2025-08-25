import styles from './css/waveContainer.module.css';
import MyName from './MyName';
import waves from '../../assets/waves1.mp4';
import Project from './Project';


function WaveContainer() {
  return (
    <div className={styles.container}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className={styles.videoBackground}
      >
        <source src={waves} type="video/mp4" />
        {/* add fallback here */}
      </video>

      <div className={styles.content}>
        <MyName />
      </div>
    </div>
  )
}

export default WaveContainer;