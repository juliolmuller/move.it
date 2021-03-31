import { ReactNode } from 'react'
import { ChallengeProvider, useChallengeContext } from './Challenge.context'
import { CountDownProvider, useCountDownContext } from './CountDown.context'

interface ContextProviderProps {
  children: ReactNode
}

/*
 * CountDownContext depends on ChallengeContext,
 * therefore ChallengeProvider should be in the hierarchy above.
 */

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
