import styled from 'styled-components'
import { colors, device, size } from '../../utils'
import { redes } from '../../data'
// ICONOS
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
const IconsArray = [AiOutlineLinkedin, FiGithub, AiOutlineInstagram]

function RedesDesktop() {
  return (
    <>
      <Container>
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
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  right: auto;
  z-index: 11;
  @media ${device.tablet} {
    display: none;
  }
`

const RedesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin-bottom: ${size.xmedium};
  }
  & svg {
    font-size: 1.5rem;
    &:hover {
      cursor: pointer;
      color: ${colors.green};
    }
  }
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.white};
  }
`

export default RedesDesktop
