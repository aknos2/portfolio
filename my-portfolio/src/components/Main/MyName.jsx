import styles from './css/myName.module.css'

function MyName() {

  return (
    <div className={styles.container} >
      <div className={styles.profileWrap}>
        <h1>
          <span>Elton</span> 
          <span>Tomiyoshi</span> 
        </h1>
        <div className={styles.profileTitle}>
          <p>Web Developer</p> 
        </div>
        <div className={styles.profileLanguage}>
          <p>React Javascript</p>
        </div>
      </div>
    </div>
  )
}

export default MyName;