import { useContext } from 'react'

import { ChallengeContext } from '../contexts'

function useChallengeContext() {
  return useContext(ChallengeContext)
}

export default useChallengeContext
