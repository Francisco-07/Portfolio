import styled from 'styled-components'
import { colors, device, size } from '../../utils'
import { useInView } from 'react-intersection-observer'
import { redes } from '../../data'

// ICONOS
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'

function RedesAndroid() {
  const [ref, inView] = useInView({ triggerOnce: true })
  const IconsArray = [AiOutlineLinkedin, FiGithub, AiOutlineInstagram]
  return (
    <>
      <Container ref={ref} inView={inView}>
        <RedesList>
          {redes.map((data, i) => {
            const Icons = IconsArray[i]
            return (
              <li key={i}>
                <a rel='noreferrer' target='_blank' href={data.href}>
                  <Icons />
                </a>
              </li>
            )
          })}
        </RedesList>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    margin-top: ${size.big};
    opacity: ${({ inView }) => (inView ? '1' : '0')};
    transition: all 1s;
  }
`

const RedesList = styled.ul`
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin-bottom: ${size.small};
  }
  & svg {
    font-size: 2.8rem;
    &:hover {
      cursor: pointer;
      color: ${colors.green};
    }
  }
`

export default RedesAndroid
