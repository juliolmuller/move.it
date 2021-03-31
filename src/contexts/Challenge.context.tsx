import { createContext, ReactNode, useContext, useState } from 'react'
import challenges from '../data/challenges.json'

interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengeContextInterface {
  activeChallenge: Challenge
  completedChallenges: number
  experience: number
  level: number
  nextLevelExperience: number
  launchChallenge: () => void
  failChallenge: () => void
}

interface ChallengeProviderProps {
  children: ReactNode
}

export const ChallengeContext = createContext({} as ChallengeContextInterface)

export function useChallengeContext() {
  return useContext(ChallengeContext)
}
export function ChallengeProvider({ children }: ChallengeProviderProps) {
  const [activeChallenge, setActiveChallenge] = useState(null)
  const [completedChallenges, setCompletedChallenges] = useState(0)
  const [experience, setExperience] = useState(30)
  const [level, setLevel] = useState(1)

  const nextLevelExperience = Math.pow((level + 1) * 4, 2)

  function launchChallenge() {
    const randomIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomIndex]

    setActiveChallenge(challenge)
  }

  function failChallenge() {
    setActiveChallenge(null)
  }

  return (
    <ChallengeContext.Provider
      value={{
        activeChallenge,
        completedChallenges,
        experience,
        level,
        nextLevelExperience,
        launchChallenge,
        failChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  )
}
