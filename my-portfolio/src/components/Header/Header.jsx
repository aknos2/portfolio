import styles from './header.module.css'

function Header({handleProjects}) {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.logo}>
          aknos2
        </div>
        <ul>
          <li><button onClick={handleProjects}>projects</button></li>
          <li>about</li>
        </ul> 
      </div>
    </nav>
  )
}

export default Header;