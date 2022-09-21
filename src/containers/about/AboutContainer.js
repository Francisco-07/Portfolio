import AboutInfo from '../../components/about/AboutInfo'
import AboutStats from '../../components/about/AboutStats'
import styled from 'styled-components'
import SectionsTitles from '../../components/titles/SectionTitles'

function AboutContainer() {
  return (
    <>
      <Container id='about'>
        <SectionsTitles>SOBRE MI</SectionsTitles>
        <AboutStats />
        <AboutInfo />
      </Container>
    </>
  )
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export default AboutContainer
