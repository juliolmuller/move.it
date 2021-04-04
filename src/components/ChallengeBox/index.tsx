import { useChallengeContext, useCountDownContext } from '../../hooks'
import styles from './styles.module.css'

function ChallengeBox() {
  const { resetCountDown } = useCountDownContext()
  const { activeChallenge, failChallenge, completeChallenge } = useChallengeContext()

  function handleChallengeSuccess() {
    resetCountDown()
    completeChallenge()
  }

  function handleChallengeFailure() {
    resetCountDown()
    failChallenge()
  }

  return (
    <div className={styles.challengeBox}>
      {activeChallenge ? (
        <div className={styles.completeChallenge}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`img/${activeChallenge.type}.svg`} />
            <strong>Novo Desafio!</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailureButton}
              onClick={handleChallengeFailure}
            >Falhei</button>
            <button
              type="button"
              className={styles.challengeSuccessButton}
              onClick={handleChallengeSuccess}
            >Completei</button>
          </footer>
        </div>
      ) : (
        <div className={styles.incompleteChallenge}>
          <span>Finalize um ciclo para receber um desafio</span>
          <div>
            <img src="img/level-up.svg" alt="level up" />
            <p>Avance de nível completando desafios</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChallengeBox
