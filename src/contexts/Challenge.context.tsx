import { createContext, ReactNode, useContext, useState } from 'react'

interface ChallengeContextInterface {
  completedChallenges: number
  experience: number
  level: number
  launchChallenge: () => void
}

interface ChallengeProviderProps {
  children: ReactNode
}

export const ChallengeContext = createContext({} as ChallengeContextInterface)

export function useChallengeContext() {
  return useContext(ChallengeContext)
}
export function ChallengeProvider({ children }: ChallengeProviderProps) {
  const [completedChallenges, setCompletedChallenges] = useState(0)
  const [experience, setExperience] = useState(0)
  const [level, setLevel] = useState(1)

  function launchChallenge() {
    console.log('Challenge launched!')
  }

  return (
    <ChallengeContext.Provider
      value={{
        completedChallenges,
        experience,
        level,
        launchChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  )
}
