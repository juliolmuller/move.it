import { type ReactNode } from 'react';

import { useChallengeContext } from '~/hooks';

import styles from './styles.module.scss';

export function ExperienceBar(): ReactNode {
  const { experience, nextLevelExperience } = useChallengeContext();

  const experiencePercentage = Math.round((experience / nextLevelExperience) * 100);

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div className={styles.progressionBar} style={{ width: `${experiencePercentage}%` }} />
        <span className={styles.currentXP} style={{ left: `${experiencePercentage}%` }}>
          {experience} xp
        </span>
      </div>
      <span>{nextLevelExperience} xp</span>
    </header>
  );
}
