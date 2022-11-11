import React from 'react'
import { FaBars } from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavbarList, 
    NavbarItem, 
    NavbarLink, 
    NavbarLogo, 
    MobileIcon 
} from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavbarLogo> Bank </NavbarLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavbarList>
                    <NavbarItem>
                        <NavbarLink spy={true} offset={-100} smooth={true} duration={500} to="home"> Home </NavbarLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NavbarLink spy={true} offset={-100} smooth={true} duration={500} to="serv"> Serviços </NavbarLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NavbarLink spy={true} offset={-100} smooth={true} duration={500} to="quem-somos"> Quem somos </NavbarLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NavbarLink spy={true} offset={-100} smooth={true} duration={500} to="app"> App </NavbarLink>
                    </NavbarItem>
                </NavbarList>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar
