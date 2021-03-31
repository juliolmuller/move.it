import { ReactNode } from 'react'
import { ChallengeProvider, useChallengeContext } from './Challenge.context'

interface ContextProviderProps {
  children: ReactNode
}

function ContextProvider({ children }: ContextProviderProps) {
  return (
    <ChallengeProvider>
      {children}
    </ChallengeProvider>
  )
}

export {
  ContextProvider as default,
  useChallengeContext,
}
