import styled from 'styled-components'
import SectionsTitles from '../../components/titles/SectionTitles'
import ProjectsAndroid from '../../components/projects/ProjectsAndroid'
import ProjectsDesktop from '../../components/projects/ProjectsDesktop'
import { projects } from '../../data'

function ProjectsContainer() {
  return (
    <>
      <Container id='work'>
        <SectionsTitles>PROYECTOS</SectionsTitles>
        {projects.map((info, i) => (
          <ProjectsDesktop
            key={i}
            title={info.title}
            tech={info.tech}
            text={info.text}
            alt={info.alt}
            linkProject={info.linkProject}
            linkRepo={info.linkRepo}
            img={info.img}
            reverse={info.reverse}
          />
        ))}
        {projects.map((info, i) => (
          <ProjectsAndroid
            key={i}
            title={info.title}
            tech={info.tech}
            text={info.text}
            alt={info.alt}
            linkProject={info.linkProject}
            linkRepo={info.linkRepo}
            img={info.img}
          />
        ))}
      </Container>
    </>
  )
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export default ProjectsContainer
