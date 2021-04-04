import { useContext } from 'react'
import { CountDownContext } from '../contexts'

function useCountDownContext() {
  return useContext(CountDownContext)
}

export default useCountDownContext
