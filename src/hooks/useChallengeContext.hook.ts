import { useContext } from 'react';

import { ChallengeContext, type ChallengeContextInterface } from '~/contexts';

export default function useChallengeContext(): ChallengeContextInterface {
  return useContext(ChallengeContext);
}
