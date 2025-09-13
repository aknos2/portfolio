import styles from './footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.upperPart}>
          <p>Contact <br/>me here</p>
        </div>
        <div className={styles.lowerPart}>
          <a a href="mailto:eltonryuji@gmail.com">eltonryuji@gmail.com</a>
        </div>
      </div>
      <div className={styles.copyrightWrap}>
          <small>Built by Elton Tomiyoshi</small>
      </div>
    </footer>
  )
}

export default Footer;