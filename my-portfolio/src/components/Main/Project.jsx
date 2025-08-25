import styles from './css/project.module.css';
import doggoBlogHigh from '../../assets/projects/doggo-high.png';

function Project() {
  return (
    <>
    <div class="backdrop">
      <div className={styles.container}>
        <h1>PROJECTS</h1>
        <div className={styles.contentWrap}>
          <h2>Blog api</h2>
          <div className={styles.imageWrap}>
            <img src={doggoBlogHigh} alt='doogo'></img>
          </div>
          <div className={styles.description}>
            <p>Blog about a Corgi dog. You can see articles, create an account, and post and like comments.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


export default Project;