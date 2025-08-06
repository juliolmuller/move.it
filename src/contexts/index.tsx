import { type ReactNode } from 'react';

import {
  ChallengeContext,
  type ChallengeContextInterface,
  ChallengeProvider,
} from './Challenge.context';
import {
  CountDownContext,
  type CountDownContextInterface,
  CountDownProvider,
} from './CountDown.context';

interface ContextProviderProps {
  children: ReactNode;
}

/*
 * CountDownContext depends on ChallengeContext,
 * therefore ChallengeProvider should be in the hierarchy above.
 */

export default function ContextProvider({ children }: ContextProviderProps): ReactNode {
  return (
    <ChallengeProvider>
      <CountDownProvider>{children}</CountDownProvider>
    </ChallengeProvider>
  );
}

export {
  ChallengeContext,
  type ChallengeContextInterface,
  ChallengeProvider,
  CountDownContext,
  type CountDownContextInterface,
  CountDownProvider,
};
