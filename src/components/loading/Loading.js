import styled, { keyframes } from 'styled-components'
import { colors } from '../../utils'
const Loading = () => {
  return (
    <Loading1>
      <Loading2>
        <Loading3></Loading3>
      </Loading2>
    </Loading1>
  )
}

const loading = keyframes`
    0% {
        height: 100%;
    }
    
    75% {
        height: 100%;
    }
    
    100% {
        height: 0;
    }
`
const loadingInner = keyframes`
    0% {
        height: 0vh;
    }
    
    100% {
        height: 100%;
    }
`

const Loading1 = styled.div`
  z-index: 900;
  height: 0;
  width: 100%;
  position: absolute;
  background: ${colors.blue};
  animation: ${loading} 1200ms ease-in-out;
  transform: rotate(180deg);
`
const Loading2 = styled.div`
  width: 100%;
  height: 100vh;
  background: ${colors.white};
  animation: ${loadingInner} 800ms ease-in-out;
`
const Loading3 = styled.div`
  width: 100%;
  height: 100vh;
  animation: ${loadingInner} 1200ms ease;
  background: ${colors.blue};
`

export default Loading
