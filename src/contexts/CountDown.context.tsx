import { createContext, ReactNode, useEffect, useState } from 'react'
import { useChallengeContext } from '../hooks'

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

const POMODORO_CYCLE_SECONDS = Number(process.env.NEXT_PUBLIC_POMODORO_CYCLE_SECONDS)

let countDownTimeout: NodeJS.Timeout

export const CountDownContext = createContext({} as CountDownContextInterface)

export function CountDownProvider({ children }: CountDownProviderProps) {
  const { launchChallenge } = useChallengeContext()

  const [isOver, setIsOver] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(POMODORO_CYCLE_SECONDS)

  function startCountDown() {
    setIsActive(true)
  }

  function resetCountDown() {
    clearTimeout(countDownTimeout)
    setTime(POMODORO_CYCLE_SECONDS)
    setIsActive(false)
    setIsOver(false)
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
