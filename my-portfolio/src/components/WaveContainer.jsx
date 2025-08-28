import wave from './css/waveContainer.module.css';
import waves from '../../assets/waves1.mp4';

function WaveContainer({children}) {

  return (
    <div className={wave.container}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={wave.videoBackground}
      >
        <source src={waves} type="video/mp4" />
      </video>

      {children}
    </div>
  )
}

export default WaveContainer;