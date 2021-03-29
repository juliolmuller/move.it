import styles from './styles.module.css'

function Profile() {
  return (
    <div className={styles.profile}>
      <img src="https://github.com/juliolmuller.png" alt="profile image" />
      <div>
        <strong>Júlio L. Müller</strong>
        <span>
          <img src="img/level.svg" alt="level"/>
          Level 1
        </span>
      </div>
    </div>
  )
}

export default Profile
