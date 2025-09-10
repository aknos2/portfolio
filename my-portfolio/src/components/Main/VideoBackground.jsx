import backgroundVideo from '../../../assets/test.mp4'

function VideoBackground() {
  return (
    <div className="videoBackground">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="video"
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
     
     </div>
  )
}

export default VideoBackground;