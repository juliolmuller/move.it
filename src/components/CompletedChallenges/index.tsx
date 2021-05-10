import { useChallengeContext } from '../../hooks'
import styles from './styles.module.scss'

function CompletedChallenges() {
  const { completedChallenges } = useChallengeContext()

  return (
    <div className={styles.completedChallenges}>
      <span>Desafios completados</span>
      <span>{completedChallenges}</span>
    </div>
  )
}

export default CompletedChallenges
