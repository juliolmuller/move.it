import { ReactNode } from 'react'
import { ChallengeProvider, useChallengeContext } from './Challenge.context'
import { CountDownProvider, useCountDownContext } from './CountDown.context'

interface ContextProviderProps {
  children: ReactNode
}

function ContextProvider({ children }: ContextProviderProps) {
  return (
    <ChallengeProvider>
      <CountDownProvider>
        {children}
      </CountDownProvider>
    </ChallengeProvider>
  )
}

export {
  ContextProvider as default,
  useChallengeContext,
  useCountDownContext,
}
