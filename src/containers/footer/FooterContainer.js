import Contact from '../../components/contact/Contact'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { device, size } from '../../utils'
import { MdKeyboardArrowRight } from 'react-icons/md'
import RedesAndroid from '../../components/redes/RedesAndroid'
import SectionsTitles from '../../components/titles/SectionTitles'

function FooterContainer() {
  const [ref, inView] = useInView({ triggerOnce: true })
  const [ref1, inView1] = useInView({ triggerOnce: true })
  return (
    <>
      <Container ref={ref} inView={inView} id='contact'>
        <SectionsTitles>CONTACTO</SectionsTitles>
        <Contact />
        <RedesAndroid />
        <Author ref={ref1} inView={inView1}>
          Desarrollo
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/Francisco-07/Portfolio'
          >
            <MdKeyboardArrowRight /> Francisco Garciarena
          </a>
        </Author>
      </Container>
    </>
  )
}

const Container = styled.footer`
  position: relative;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 1s;
`

const Author = styled.p`
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 1s;
  padding: ${size.large};
  margin-bottom: 0;
  height: 100%;
  display: flex;
  margin-top: ${size.medium};
  font-size: 1.2rem;
  align-items: center;
  justify-content: center;
  color: white;
  & a {
    display: flex;
    align-items: center;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    & svg {
      cursor: pointer;
      margin-left: 2px;
      margin-right: 2px;
      font-size: 2.1rem;
    }
  }
  @media ${device.laptop} {
    text-align: center;
    margin-top: 0;
  }
`
export default FooterContainer
