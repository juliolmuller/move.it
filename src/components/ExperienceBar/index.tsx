import styles from './styles.module.css'

function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div className={styles.progressionBar} style={{ width: '60%' }} />
        <span className={styles.currentXP} style={{ left: '60%' }}>
          500 xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  )
}

export default ExperienceBar
