import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { stats } from '../../data'
import { colors, device, size } from '../../utils'
function AboutStats() {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
  })
  return (
    <>
      <Container>
        <Wrapper>
          <About inView={inView}>
            <ImageContainer>
              <Image />
            </ImageContainer>
            <h2>Quien soy?</h2>
            <p>
              Soy un desarrollador frontend junior. Como desarrollador me
              especializo en proyectos centrados alrededor de aplicaciones web.
            </p>
          </About>

          <Estadisticas inView={inView} ref={ref}>
            {stats.map((data, i) => (
              <OuterBar key={i}>
                <Tech>{data.tech}</Tech>
                <BarEmpty>
                  <BarFilled
                    percent={data.percent}
                    delay={data.delay}
                    inView={inView}
                  >
                    <Percent>{data.percent + '%'}</Percent>
                  </BarFilled>
                </BarEmpty>
              </OuterBar>
            ))}
          </Estadisticas>
        </Wrapper>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${size.medium};
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80vw;
  @media ${device.tablet} {
    flex-direction: column;
  }
`

const OuterBar = styled.div`
  width: 50vw;
  background-color: ${colors.white};
  color: ${colors.secondary};
  display: flex;
  justify-content: space-between;
  margin-bottom: ${size.small};
  position: relative;
  font-size: 1.25rem;
  @media ${device.tablet} {
    width: 90vw;
  }
`

const BarEmpty = styled.div`
  flex: 0.7;
  background: ${colors.white};
  display: flex;
`
const BarFilled = styled.div`
  width: ${({ inView, percent }) => (inView ? `${percent}%` : '0%')};
  transition: all 2.7s;
  background: ${colors.aqua};
  transition-delay: ${(props) => props.delay}s;
`

const Tech = styled.div`
  flex: 0.3;
  white-space: nowrap;
  text-align: center;
  color: ${colors.white};
  font-size: 1.1rem;
  background-color: ${colors.green};
`
const Percent = styled.span`
  position: absolute;
  font-size: 1.1rem;
  right: 0;
  color: gray;
  font-weight: bold;
`

const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
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
`

const Image = styled.div`
  width: 322px;
  height: 322px;
  background: url('/assets/me.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
`

const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  transition: all 0.4s;
  opacity: ${({ inView }) => (inView ? `1` : '0')};
  h2 {
    font-size: 2rem;
    margin: ${size.xmedium} 0;
  }
  p {
    width: 65%;
    margin: 0;
    font-size: 1.1rem;
    @media ${device.tablet} {
      width: 90%;
    }
  }
`

const Estadisticas = styled.div`
  margin-top: ${size.medium};
  transition: all 1s;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
`

export default AboutStats
