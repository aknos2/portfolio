import styles from '../css/slider.module.css';
import { useEffect, useState } from 'react';
import { slider } from '../../../data/slide';

function Slider() {
  const [slides, setSlides] = useState([]);
  const images = slider[0].images; 

  useEffect(() => {
    setSlides([...images, ...images]); //duplicate for looping
  }, [images]);

  return (
    <aside>
      <h2>More projects</h2>
      <div className={styles.container}>
        <div className={styles.sliderTrack}>
          {slides.map((image, index) => (
            <div className={styles.slide} key={index}>
              <a href={image.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={image.high}
                  alt={`slide ${index + 1}`}
                  srcSet={`${image.low} 480w, ${image.high} 1080w`}
                  sizes="(max-width: 600px) 480px, 1080px"
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Slider;
