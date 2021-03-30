import { useEffect, useState } from 'react'
import styles from './styles.module.css'

const SECONDS_PER_MINUTE = 60
const POMODORO_CYCLE_MIN = 25
const POMODORO_CYCLE_SEC = SECONDS_PER_MINUTE * POMODORO_CYCLE_MIN

let countDownTimeout: NodeJS.Timeout

function CountDown() {
  const [isOver, setIsOver] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(POMODORO_CYCLE_SEC)

  const minutes = Math.floor(time / SECONDS_PER_MINUTE)
  const seconds = time % SECONDS_PER_MINUTE
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  useEffect(() => {
    if (isActive) {
      if (time > 0) {
        countDownTimeout = setTimeout(() => {
          setTime(time - 1)
        }, 1000)
      } else if (time === 0) {
        setIsActive(true)
        setIsOver(true)
      }
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
          onClick={() => {
            clearTimeout(countDownTimeout)
            setTime(POMODORO_CYCLE_SEC)
            setIsActive(false)
          }}
        >Abandonar Ciclo</button>
      ) : (
        <button
          type="button"
          className={styles.button}
          onClick={() => setIsActive(true)}
        >Iniciar Novo Ciclo</button>
      )}
    </>
  )
}

export default CountDown
