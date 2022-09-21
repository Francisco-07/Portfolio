import styled from 'styled-components'
import { useState, useEffect, useCallback } from 'react'
import { colors, device, size } from '../../utils'

// ICONOS
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseLine } from 'react-icons/ri'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset

    setVisible(currentScrollPos < prevScrollPos ? true : false)

    setPrevScrollPos(currentScrollPos)
  }, [prevScrollPos])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible, handleScroll])
  return (
    <>
      <Container style={{ top: visible ? '0' : '-60px' }}>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RiCloseLine /> : <GiHamburgerMenu />}
        </Hamburger>
        <Menu isOpen={isOpen}>
          <Blur />
          <Items>
            {/* <Resume>Curriculum</Resume> */}
            <Item href='#about' onClick={() => setIsOpen(false)}>
              Sobre mi
            </Item>
            <Item href='#work' onClick={() => setIsOpen(false)}>
              Proyectos
            </Item>
            <Item href='#contact' onClick={() => setIsOpen(false)}>
              Contacto
            </Item>
          </Items>
        </Menu>
      </Container>
    </>
  )
}

const Container = styled.nav`
  width: 100vw;
  height: 50px;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  top: 0;
  padding: 0 ${size.medium};
  background-color: ${colors.blue};
  z-index: 800;
  transition: 0.5s all;
`

const Menu = styled.div`
  font-size: 1.2rem;
  @media ${device.laptop} {
    display: flex;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 50%;
    transform: translate(0%, -50%);
    left: ${({ isOpen }) => (isOpen ? '0' : '100%')};
    transition: 0.2s ease-in-out;
    z-index: 10;
  }
`
const Items = styled.div`
  transition: opacity 4s;
  display: flex;
  align-items: center;
  gap: ${size.xmedium};

  @media ${device.laptop} {
    animation: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.blue};
    width: 70vw;
    height: 100vh;
  }
`
const Blur = styled.div`
  display: none;
  @media ${device.laptop} {
    backdrop-filter: blur(1.8px);
    display: flex;
    width: 30vw;
    height: 100vh;
  }
`

const Item = styled.a`
  cursor: pointer;
  border-left: 1px solid transparent;
  padding-left: 0.6rem;
  &:hover {
    border-left: 1px solid white;
  }
`
const Hamburger = styled.div`
  display: none;
  @media ${device.laptop} {
    display: flex;
    z-index: 11;

    & svg {
      font-size: 1.5rem;
      color: white;
    }
  }
`

export default Navbar
