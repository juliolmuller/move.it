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
  completeChallenge: () => void
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
  const [experience, setExperience] = useState(0)
  const [level, setLevel] = useState(1)

  const nextLevelExperience = Math.pow((level + 1) * 4, 2)

  function launchChallenge() {
    const randomIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomIndex]

    setActiveChallenge(challenge)
  }

  function completeChallenge() {
    if (activeChallenge) {
      const { amount } = activeChallenge as Challenge
      let newExperience = experience + amount

      if (newExperience > nextLevelExperience) {
        newExperience -= nextLevelExperience
        setLevel(level + 1)
      }

      setCompletedChallenges(completedChallenges + 1)
      setExperience(newExperience)
      setActiveChallenge(null)
    }
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
        completeChallenge,
        failChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  )
}
