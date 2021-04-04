import { ReactNode } from 'react'
import { ChallengeContext, ChallengeProvider } from './Challenge.context'
import { CountDownContext, CountDownProvider } from './CountDown.context'

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
  CountDownContext,
  ChallengeProvider,
  ChallengeContext,
  CountDownProvider,
}
