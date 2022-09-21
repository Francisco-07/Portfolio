import RedesDesktop from '../components/redes/RedesDesktop'
import AboutContainer from '../containers/about/AboutContainer'
import ProjectsContainer from '../containers/projects/ProjectsContainer'
import FooterContainer from '../containers/footer/FooterContainer'
import Header from '../containers/header/Header'

import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

function Main() {
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <>
      <Container ref={ref} inView={inView}>
        <Header />
        <RedesDesktop />
        <AboutContainer />
        <ProjectsContainer />
        <FooterContainer />
      </Container>
    </>
  )
}

const Container = styled.div`
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 1s;
`

export default Main
