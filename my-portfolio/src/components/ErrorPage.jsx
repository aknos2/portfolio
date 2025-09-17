import errorBackground from '../assets/errorBackground.mp4';
import { Link } from 'react-router-dom';
import './Main/css/main.css';

function ErrorPage() {
  return (
    <div className="error-page">
      <video autoPlay loop muted playsInline>
          <source src={errorBackground} type="video/mp4" />
      </video>
      <h1>Something went wrong</h1>
      <Link to="/"><p>click here to go home</p></Link>
    </div>
  )
}

export default ErrorPage;