import { useState } from 'react'
import styles from './styles.module.css'

function ChallengeBox() {
  const [isOver] = useState(!false)

  return (
    <div className={styles.challengeBox}>
      {isOver ? (
        <div className={styles.completeChallenge}>
          <header>Ganhe 400xp</header>

          <main>
            <img src="img/body.svg" />
            <strong>Novo Desafio!</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailureButton}
            >Falhei</button>
            <button
              type="button"
              className={styles.challengeSuccessButton}
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
