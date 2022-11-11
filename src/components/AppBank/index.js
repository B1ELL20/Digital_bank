import React from 'react'
import imgApp from '../../images/app.svg'
import { 
  AppBtn, 
  AppImg, 
  Column, 
  AppContainer, 
  AppWrapper, 
  AppContent, 
  AppTitle,
  Appdesc, 
  AndroidIcon, 
  IosIcon,
  WindowsIcon,
  BoxButton 
} from './AppBankElements'

const AppBank = () => {
  return (
    <>
      <AppContainer id="app">
        <AppWrapper>
          <Column>
            <AppContent>
              <AppTitle>Acesso fácil, rápido e sem complicação</AppTitle>
              <Appdesc>Adquira já o nosso app, disponível para todos os dispositivos!</Appdesc>
              <BoxButton>
                <AppBtn><AndroidIcon />Androind</AppBtn>
                <AppBtn><IosIcon />IOS</AppBtn>
                <AppBtn><WindowsIcon />Windows</AppBtn>
              </BoxButton>
            </AppContent>
          </Column>
          <Column>
            <AppImg src={imgApp}/>
          </Column>
        </AppWrapper>
      </AppContainer>
    </>
  )
}

export default AppBank
