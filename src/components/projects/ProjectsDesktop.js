import styled from 'styled-components'
import { colors, device, size } from '../../utils'
import { useInView } from 'react-intersection-observer'

// ICONOS
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'

const ProjectsDesktop = (props) => {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <Container>
      <Wrapper ref={ref} reverse={props.reverse}>
        <BoxInfo reverse={props.reverse} inView={inView}>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <Tech reverse={props.reverse}>
            {props.tech.map((tech, i) => {
              return <div key={i}>{tech}</div>
            })}
          </Tech>
          <Icons reverse={props.reverse}>
            <a target='_blank' rel='noreferrer' href={props.linkRepo}>
              <FiGithub />
            </a>
            <a target='_blank' rel='noreferrer' href={props.linkProject}>
              <BsBoxArrowUpRight />
            </a>
          </Icons>
        </BoxInfo>
        <BoxImg reverse={props.reverse} inView={inView}>
          <img src={props.img} alt={props.alt} />
        </BoxImg>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 300px;
  margin-bottom: ${size.large};
  font-size: 1.1rem;
  @media ${device.laptop} {
    display: none;
  }
`
const Wrapper = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  position: relative;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  @media ${device.desktop} {
    width: 50%;
  }
`
const BoxInfo = styled.div`
  width: 60%;
  min-height: 250px;
  text-align: ${({ reverse }) => (reverse ? 'end' : 'start')};
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 1s;
  transition-delay: 0.2s;
  transform: scale(1.1);

  p {
    margin-left: ${({ reverse }) => (reverse ? '0' : '4rem')};
    margin-right: ${({ reverse }) => (reverse ? '4rem' : '0')};
    background: #ff416c; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
    background: linear-gradient(to right, #ff4b2b, #ff416c);

    padding: ${size.xsmall};
    box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    opacity: ${({ inView }) => (inView ? '1' : '0')};
    transform: ${({ inView }) =>
      inView ? 'translate(0px, 0px);' : 'translate(0px, 50px);'};
    transition: all 0.4s;
    transition-delay: 0.7s;
  }
`
const BoxImg = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  position: absolute;
  left: ${({ reverse }) => (reverse ? '60px' : 'none')};
  right: ${({ reverse }) => (reverse ? 'none' : '60px')};
  z-index: 50;
  border-radius: 4px;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 1s;
  transition-delay: 0.2s;
  img {
    width: 100%;
    height: 100%;
    box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    filter: grayscale(52%) sepia(56%) brightness(46%) hue-rotate(215deg);
    &:hover {
      filter: none;
    }
  }
`
const Icons = styled.div`
  margin-top: ${size.xsmall};
  display: flex;
  gap: ${size.small};
  justify-content: ${({ reverse }) => (reverse ? 'flex-end' : 'flex-start')};
  svg {
    cursor: pointer;
    font-size: 1.3rem;
    &:hover {
      color: ${colors.green};
    }
  }
`
const Tech = styled.div`
  display: flex;
  justify-content: ${({ reverse }) => (reverse ? 'flex-end' : 'flex-start')};
  flex-wrap: wrap;
  gap: ${size.xsmall};
  text-transform: uppercase;
  div {
    background-color: ${colors.green};
    border-radius: 3px;
    padding: 0 ${size.xsmall};
    box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.75);
  }
`

export default ProjectsDesktop
