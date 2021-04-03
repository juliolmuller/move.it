import { useChallengeContext } from '../../contexts'
import styles from './styles.module.css'

function LevelUpModal() {
  const { level, closeModal } = useChallengeContext()

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns!</strong>
        <p>Você alcançou um novo nível</p>

        <button type="button" onClick={closeModal}>
          <img src="/img/close.svg" alt="fechar janela" />
        </button>
      </div>
    </div>
  )
}

export default LevelUpModal
