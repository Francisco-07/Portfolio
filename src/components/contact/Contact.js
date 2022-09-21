import styled from 'styled-components'
import { colors, device, size } from '../../utils'
import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true })
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_vj6zm5f',
        'template_mznfflj',
        form.current,
        '4ZAOPuyoKRHimwgWd'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <>
      <Container ref={ref} inView={inView}>
        <Wrapper ref={form} onSubmit={sendEmail}>
          <div>
            <DataInputs type='text' name='nombre' placeholder='NOMBRE' />
          </div>

          <div>
            <DataInputs type='email' name='email' placeholder='EMAIL' />
          </div>

          <div>
            <Text name='mensaje' placeholder='MENSAJE'></Text>
          </div>
          <Btn type='submit' value='Send'>
            ENVIAR
          </Btn>
        </Wrapper>
      </Container>
    </>
  )
}
export default Contact

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transform: ${({ inView }) =>
    inView ? 'translate(0px, 0px);' : 'translate(0px, 50px);'};
  transition: all 1s;
`

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`

const DataInputs = styled.input`
  width: 350px;
  height: 35px;
  background-color: transparent;
  margin-bottom: ${size.xsmall};
  border: 1px solid white;
  outline: none;
  border-radius: 4px;
  ::placeholder {
    color: white;
  }
  @media ${device.mobileL} {
    width: 280px;
  }
  @media ${device.mobileS} {
    width: 250px;
  }
`
const Text = styled.textarea`
  width: 350px;
  height: 150px;
  background-color: transparent;
  border: 1px solid white;
  resize: none;
  outline: none;
  border-radius: 4px;
  ::placeholder {
    color: white;
  }
  @media ${device.mobileL} {
    width: 280px;
  }
  @media ${device.mobileS} {
    width: 250px;
  }
`

const Btn = styled.button`
  outline: 0;
  cursor: pointer;
  align-self: flex-end;
  border-radius: 6px;
  border: 2px solid ${colors.green};
  padding: ${size.xsmall};
  color: #fff;
  background-color: ${colors.green};
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 4px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1.5px 0px;
  font-weight: 800;
  font-size: 1rem;
  :hover {
    background: 0 0;
    color: ${colors.green};
  }
`
