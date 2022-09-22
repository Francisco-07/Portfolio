import styled from 'styled-components'
import { colors, device } from '../../utils'
import { IoIosArrowDown } from 'react-icons/io'
import { useInView } from 'react-intersection-observer'

const ShowDate = () => {
  const [ref, inView] = useInView({ triggerOnce: true })
  const date = Date().split(' ')
  const month = date[1].toUpperCase()
  const day = date[2]

  return (
    <a href='#about'>
      <Circle ref={ref} inView={inView}>
        <Text>
          <span>{day}</span>
          <span>{month}</span>
        </Text>
        <Work>
          <p>Open to work</p>
          <IoIosArrowDown />
        </Work>
        <Hide />
      </Circle>
    </a>
  )
}

const Hide = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  z-index: 90;
  border-radius: 50%;
  background-color: ${colors.blue};
  right: 0;
`
const Work = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 200;
  font-size: 1.3rem;
  svg {
    opacity: 0;
    position: absolute;
    transform: scale(2);
  }
`
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid gray;
  position: relative;
  &:hover {
    border: 1px solid white;
    cursor: pointer;
  }
  @media ${device.mobileL} {
    border: 1px solid white;
  }

  &:hover ${Work} {
    p {
      opacity: 0;
    }
    svg {
      opacity: 1;
    }
  }
`
const Text = styled.div`
  position: absolute;
  top: 0;
  right: 0px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-size: 2rem;
  z-index: 100;
`

export default ShowDate
