import { createContext, ReactNode, useEffect, useState } from 'react'
import cookies from 'js-cookie'
import challenges from '../data/challenges.json'
import LevelUpModal from '../components/LevelUpModal'

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
  closeModal: () => void
}

interface ChallengeProviderProps {
  children: ReactNode
  initialValue?: {
    completedChallenges: number
    experience: number
    level: number
  }
}

export const ChallengeContext = createContext({} as ChallengeContextInterface)

export function ChallengeProvider({ children, initialValue }: ChallengeProviderProps) {
  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [completedChallenges, setCompletedChallenges] = useState(initialValue?.completedChallenges ?? 0)
  const [experience, setExperience] = useState(initialValue?.experience ?? 0)
  const [level, setLevel] = useState(initialValue?.level ?? 1)

  // eslint-disable-next-line no-magic-numbers
  const nextLevelExperience = Math.pow((level + 1) * 4, 2)

  function launchChallenge() {
    const notificationRing = new Audio('/audio/notification.mp3')
    const randomIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomIndex]

    notificationRing.play()
    setActiveChallenge(challenge)

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount} xp`,
      })
    }
  }

  function closeModal() {
    setIsModalVisible(false)
  }

  function completeChallenge() {
    if (activeChallenge) {
      const { amount } = activeChallenge as Challenge
      let newExperience = experience + amount

      if (newExperience > nextLevelExperience) {
        newExperience -= nextLevelExperience
        setIsModalVisible(true)
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

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    cookies.set(process.env.NEXT_PUBLIC_STORAGE_KEY_LEVEL, String(level))
    cookies.set(process.env.NEXT_PUBLIC_STORAGE_KEY_EXPERIENCE, String(experience))
    cookies.set(process.env.NEXT_PUBLIC_STORAGE_KEY_CHALLENGES, String(completedChallenges))
  }, [level, experience, completedChallenges])

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
        closeModal,
      }}
    >
      {children}

      {isModalVisible && <LevelUpModal />}
    </ChallengeContext.Provider>
  )
}
