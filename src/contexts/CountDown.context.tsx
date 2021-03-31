import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useChallengeContext } from './Challenge.context'

interface CountDownContextInterface {
  isActive: boolean
  isOver: boolean
  time: number
  startCountDown: () => void
  resetCountDown: () => void
}

interface CountDownProviderProps {
  children: ReactNode
}

const SECONDS_PER_MINUTE = 60
const POMODORO_CYCLE_MIN = 25
const POMODORO_CYCLE_SEC = SECONDS_PER_MINUTE * POMODORO_CYCLE_MIN

let countDownTimeout: NodeJS.Timeout

export const CountDownContext = createContext({} as CountDownContextInterface)

export function useCountDownContext() {
  return useContext(CountDownContext)
}
export function CountDownProvider({ children }: CountDownProviderProps) {
  const { launchChallenge } = useChallengeContext()

  const [isOver, setIsOver] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(POMODORO_CYCLE_SEC)

  function startCountDown() {
    setIsActive(true)
  }

  function resetCountDown() {
    clearTimeout(countDownTimeout)
    setTime(POMODORO_CYCLE_SEC)
    setIsActive(false)
  }

  useEffect(() => {
    if (isActive) {
      if (time > 0) {
        countDownTimeout = setTimeout(() => {
          setTime(time - 1)
        }, 1000)
      } else if (time === 0) {
        launchChallenge()
        setIsActive(true)
        setIsOver(true)
      }
    }
  }, [isActive, time])

  return (
    <CountDownContext.Provider
      value={{
        isActive,
        isOver,
        time,
        startCountDown,
        resetCountDown,
      }}
    >
      {children}
    </CountDownContext.Provider>
  )
}
