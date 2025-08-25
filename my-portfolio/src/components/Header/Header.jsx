import styles from './header.module.css'

function Header() {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.logo}>
          aknos2
        </div>
        <ul>
          <li>projects</li>
          <li>about</li>
        </ul> 
      </div>
    </nav>
  )
}

export default Header;