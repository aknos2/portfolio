import styles from './css/languages.module.css'

function Languages() {
  return (
    <div className={styles.container}>
      <h3>Built with</h3>
      <ul>
        <li>Javascript, React</li>
        <li>Node.js, Express</li>
        <li>PostgreSQL, Prisma</li>
        <li>Passport.js, JsonWebToken</li>
      </ul>
    </div>
  )
}

export default Languages;