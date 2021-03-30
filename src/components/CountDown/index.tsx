import { useEffect, useState } from 'react'
import styles from './styles.module.css'

const SECONDS_PER_MINUTE = 60
const POMODORO_CYCLE_MIN = 25
const POMODORO_CYCLE_SEC = SECONDS_PER_MINUTE * POMODORO_CYCLE_MIN

let countDownTimeout: NodeJS.Timeout

function CountDown() {
  const [isActive, setActive] = useState(false)
  const [time, setTime] = useState(POMODORO_CYCLE_SEC)

  const minutes = Math.floor(time / SECONDS_PER_MINUTE)
  const seconds = time % SECONDS_PER_MINUTE
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => setTime(time - 1), 1000)
    }
  }, [isActive, time])

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

      {isActive ? (
        <button
          type="button"
          className={`${styles.button} ${styles.cycleActive}`}
          onClick={() => {
            clearTimeout(countDownTimeout)
            setTime(POMODORO_CYCLE_SEC)
            setActive(false)
          }}
        >Abandonar Ciclo</button>
      ) : (
        <button
          type="button"
          className={styles.button}
          onClick={() => setActive(true)}
        >Iniciar Novo Ciclo</button>
      )}
    </>
  )
}

export default CountDown
