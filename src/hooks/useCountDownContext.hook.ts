import { useContext } from 'react';

import { CountDownContext, type CountDownContextInterface } from '../contexts';

export default function useCountDownContext(): CountDownContextInterface {
  return useContext(CountDownContext);
}
