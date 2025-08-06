import { type ReactNode } from 'react';

import { useChallengeContext } from '../../hooks';
import styles from './styles.module.scss';

function Profile(): ReactNode {
  const { level } = useChallengeContext();

  return (
    <div className={styles.profile}>
      <img src="https://github.com/juliolmuller.png" alt="profile avatar" />
      <div>
        <strong>Júlio L. Müller</strong>
        <span>
          <img src="img/level.svg" alt="level" />
          Level {level}
        </span>
      </div>
    </div>
  );
}

export default Profile;
