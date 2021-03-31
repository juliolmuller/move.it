import { useChallengeContext } from '../../contexts'
import styles from './styles.module.css'

function Profile() {
  const { level } = useChallengeContext()

  return (
    <div className={styles.profile}>
      <img src="https://github.com/juliolmuller.png" alt="profile image" />
      <div>
        <strong>Júlio L. Müller</strong>
        <span>
          <img src="img/level.svg" alt="level"/>
          Level {level}
        </span>
      </div>
    </div>
  )
}

export default Profile
