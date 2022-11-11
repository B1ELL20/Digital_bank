import React from 'react'
import imgCapa from '../../images/capa.svg'
import wave from '../../images/wave_top.svg'
import { 
    CapaContainer, 
    Column, 
    CapaContent, 
    CapaH1, 
    CapaP, 
    CapaImg, 
    CapaBtn,
    CapaWave 
} from './CapaElements'

const Capa = () => {
  return (
    <>
      <CapaContainer id="home">
        <Column>
            <CapaContent>
                <CapaH1>O SEU BANCO DIGITAL</CapaH1>
                <CapaP> Segurança e confiabilidade na palma da sua mão</CapaP>
                <CapaBtn>Comece já</CapaBtn>
            </CapaContent>
        </Column>
        <Column>
            <CapaImg src={imgCapa} />
        </Column>
      </CapaContainer>
      <CapaWave src={wave}/>
    </>
  )
}

export default Capa
