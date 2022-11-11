import React from 'react'
import { 
    SidebarContainer, 
    SideClose, 
    SideIcon, 
    SideLogo, 
    SideList, 
    SideItem 
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <SideClose>
            <SideLogo> Bank </SideLogo>
            <SideIcon onClick={toggle}/>
        </SideClose>
        <SideList>
            <SideItem spy={true} offset={-100} smooth={true} duration={500} onClick={toggle} to="home">
                    Home
            </SideItem>
            <SideItem spy={true} offset={-100} smooth={true} duration={500} onClick={toggle} to="serv">
                    Serviços
            </SideItem>
            <SideItem spy={true} offset={-100} smooth={true} duration={500} onClick={toggle} to="quem-somos">
                    Quem Somos
            </SideItem>
            <SideItem spy={true} offset={-100} smooth={true} duration={500} onClick={toggle} to="app">
                    App
            </SideItem>
        </SideList>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
