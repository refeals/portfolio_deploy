import Image from 'next/image'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src="/siks-color.png" alt="Rafael Siqueira (cartoon)" width="485" height="610" />
      </div>
      <div className={styles.text}>
        <div>About me</div>
      </div>
    </div>
  )
}

export default About
