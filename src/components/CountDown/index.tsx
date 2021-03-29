import { useEffect, useState } from 'react'
import styles from './styles.module.css'

const SECONDS_PER_MINUTE = 60
const POMODORO_CYCLE_MIN = 25
const POMODORO_CYCLE_SEC = SECONDS_PER_MINUTE * POMODORO_CYCLE_MIN

function CountDown() {
  const [isActive, setActive] = useState(false)
  const [time, setTime] = useState(POMODORO_CYCLE_SEC)

  const minutes = Math.floor(time / SECONDS_PER_MINUTE)
  const seconds = time % SECONDS_PER_MINUTE
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function handleClick() {
    setActive(true)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      setTimeout(() => setTime(time - 1), 1000)
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

      <button
        type="button"
        className={styles.button}
        onClick={handleClick}
      >
        Iniciar um Ciclo
      </button>
    </>
  )
}

export default CountDown
