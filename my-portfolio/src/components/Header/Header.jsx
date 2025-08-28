import { Link } from 'react-router-dom';
import styles from './header.module.css'

function Header({handleProjects}) {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" className={styles.navLinks}>aknos2</Link>
        </div>
        <ul>
          <li><button onClick={handleProjects}>projects</button></li>
          <li><Link to="about" className={styles.navLinks}>about</Link></li>
        </ul> 
      </div>
    </nav>
  )
}

export default Header;