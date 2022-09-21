import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { colors, size } from '../../utils'

function SectionsTitles(props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })
  return (
    <Container>
      <Title ref={ref} inView={inView}>
        {props.children}
      </Title>

      <LineaLeft inView={inView} />
      <LineaRight inView={inView} />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: ${size.fbig};
  margin-bottom: ${size.fbig};
`

const LineaLeft = styled.div`
  position: absolute;
  background: ${colors.white};
  height: 4px;
  width: 30px;
  margin-right: -1px;
  left: ${({ inView }) => (inView ? '50%' : '0')};
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 0.4s;
  transition-delay: 0.3s;
  bottom: 0;
`
const LineaRight = styled.div`
  position: absolute;
  background: ${colors.white};
  height: 4px;
  width: 30px;
  right: ${({ inView }) => (inView ? '50%' : '0')};
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 0.4s;
  transition-delay: 0.3s;
  bottom: 0;
  margin-left: -1px;
`
const Title = styled.h2`
  color: ${colors.white};
  text-align: center;
  font-size: 2rem;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 0.5s;
`

export default SectionsTitles
