import styles from './styles.module.css'

function CountDown() {
  return (
    <div className={styles.countDown}>
      <div>
        <span>2</span>
        <span>5</span>
      </div>
      <span>:</span>
      <div>
        <span>0</span>
        <span>0</span>
      </div>
    </div>
  )
}

export default CountDown
