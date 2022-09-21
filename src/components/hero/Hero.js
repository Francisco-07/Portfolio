import styled from 'styled-components'
import { colors, device, size } from '../../utils'
import { FiArrowDownRight } from 'react-icons/fi'
import ShowDate from '../date/ShowDate'

function Hero() {
  return (
    <Container>
      <NavbarHeight />
      <HeroContainer>
        <Wrapper>
          <TextContainer>
            <h1>
              <Text>
                <span>FRANCISCO</span>

                <span>GARCIARENA</span>
              </Text>
            </h1>
            <Subtitle>
              <FiArrowDownRight />
              <h3>
                FRONT<Red>-</Red>
                END DEVELOPER
              </h3>
            </Subtitle>
          </TextContainer>
          <Align>
            <ShowDate />
          </Align>
        </Wrapper>
      </HeroContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`
const NavbarHeight = styled.div`
  height: 60px;
  width: 100%;
`
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100%;
  overflow: hidden;
`
const Wrapper = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media ${device.mobileL} {
    align-items: center;
  }
`

const Align = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Text = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.mobileL} {
    align-items: center;
    gap: ${size.small};
    padding: ${size.medium};
    background: linear-gradient(to right, white 3px, transparent 3px) 0 0,
      linear-gradient(to left, white 3px, transparent 3px) 100% 100%,
      linear-gradient(to bottom, white 3px, transparent 3px) 0 0,
      linear-gradient(to top, white 3px, transparent 3px) 100% 100%;

    background-repeat: no-repeat;
    background-size: 20px 20px;
    position: relative;
  }
`

const TextContainer = styled.div`
  white-space: nowrap;
  h1 {
    font-size: 4.8rem;
    letter-spacing: 2px;
  }
  h3 {
    font-size: 2.8rem;

    letter-spacing: 2px;
  }
  svg {
    font-size: 2.2rem;

    margin-left: ${size.big};
    color: ${colors.red};
  }
  @media ${device.laptop} {
    h1 {
      font-size: 4rem;
    }

    h3 {
      font-size: 3rem;
      letter-spacing: 3px;
    }
    svg {
      font-size: 1.8rem;
      color: ${colors.red};
    }
  }
  @media ${device.tablet} {
    h1 {
      font-size: 3rem;
    }

    h3 {
      font-size: 2rem;
    }
    svg {
      font-size: 1.8rem;
      margin-left: 0px;
      color: ${colors.red};
    }
  }
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      text-align: center;
      font-size: 2.7rem;
    }

    h3 {
      font-size: 1.3rem;
    }
    svg {
      font-size: 1.3rem;
      margin-left: 0px;
    }
  }
`
const Subtitle = styled.div`
  display: flex;
  align-items: center;
  @media ${device.mobileL} {
    margin-top: ${size.big};
  }
`

const Red = styled.span`
  color: ${colors.red};
`

export default Hero
