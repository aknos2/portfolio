import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.css'

function Header({handleProjects}) {
  const location = useLocation();
  const isProject = location.pathname === '/projects';
  const isAbout = location.pathname === '/about';

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" className={styles.navLinks}>aknos2</Link>
        </div>
        <ul>
          <li>
            <button onClick={handleProjects}>
              {isProject ? 'home' : 'projects'}
            </button>
          </li>
          <li>
            {!isAbout ? (
              <Link to="/about" className={styles.navLinks}>about</Link>
            ) : (
              <Link to="/" className={styles.navLinks}>home</Link>
            )}
          </li>
        </ul> 
      </div>
    </nav>
  )
}

export default Header;