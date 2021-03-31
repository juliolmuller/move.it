import { useChallengeContext } from '../../contexts'
import styles from './styles.module.css'

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
