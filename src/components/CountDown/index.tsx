import { useCountDownContext } from '../../hooks'
import styles from './styles.module.css'

const SECONDS_PER_MINUTE = 60

function CountDown() {
  const {
    time,
    isOver,
    isActive,
    startCountDown,
    resetCountDown,
  } = useCountDownContext()

  const minutes = Math.floor(time / SECONDS_PER_MINUTE)
  const seconds = time % SECONDS_PER_MINUTE
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <>
      <div className={styles.countDown}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {isOver ? ( // eslint-disable-line no-nested-ternary
        <button
          type="button"
          className={styles.button}
          disabled
        >Ciclo Encerrado</button>
      ) : isActive ? (
        <button
          type="button"
          className={`${styles.button} ${styles.cycleActive}`}
          onClick={resetCountDown}
        >Abandonar Ciclo</button>
      ) : (
        <button
          type="button"
          className={styles.button}
          onClick={startCountDown}
        >Iniciar Novo Ciclo</button>
      )}
    </>
  )
}

export default CountDown
