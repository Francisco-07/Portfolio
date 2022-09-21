import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { colors, device, size } from '../../utils'
import { about } from '../../data'
// iconos
import { IconContext } from 'react-icons'
import { DiResponsive } from 'react-icons/di'
import { SiSpeedtest } from 'react-icons/si'
import { BiRocket } from 'react-icons/bi'
import { MdLightbulbOutline } from 'react-icons/md'

function AboutInfo() {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
  })
  const IconsArray = [DiResponsive, SiSpeedtest, BiRocket, MdLightbulbOutline]

  return (
    <Container>
      <Wrapper>
        {about.map((data, i) => {
          const Icon = IconsArray[i]
          return (
            <IconTextContainer
              ref={ref}
              key={i}
              inView={inView}
              delay={data.delay}
            >
              <Shape>
                <IconContext.Provider value={{ size: data.size }}>
                  <Icon />
                </IconContext.Provider>
              </Shape>
              <h2>{data.title}</h2>
              <p>{data.text1}</p>
              <p>{data.text2}</p>
            </IconTextContainer>
          )
        })}
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${size.large};
  @media ${device.tablet} {
    display: none;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  width: 80%;
  & svg {
    font-size: 3rem;
    color: ${colors.blue};
  }
  @media ${device.desktop} {
    width: 60%;
  }
`

const IconTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  white-space: nowrap;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transform: ${({ inView }) => (inView ? 'rotateX(0)' : 'rotateX(90deg)')};
  transition: all 1.1s;
  transition-delay: ${(props) => props.delay}s;

  h2 {
    font-size: 1.4rem;
    margin-bottom: ${size.xsmall};
  }
  p {
    margin: 0;
    font-size: 1.1rem;
  }
  svg {
    color: ${colors.black};
  }
`

const Shape = styled.div`
  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  );
  width: 100px;
  height: 100px;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: ${size.small};
`

export default AboutInfo
