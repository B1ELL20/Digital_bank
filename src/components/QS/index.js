import React from 'react'
import imgQS from '../../images/img3.svg'
import { 
    QSContainer, 
    QSWrapper, 
    Column, 
    QSImg, 
    QSContent, 
    QSTop, 
    QSTitle, 
    QSdesc 
} from './QSElements'

const QuemSomos = () => {
  return (
    <>
      <QSContainer id="quem-somos">
        <QSWrapper>
            <Column>
                <QSImg src={imgQS}/>
            </Column>
            <Column>
                <QSContent>
                    <QSTop>DIGITAL BANK</QSTop>
                    <QSTitle>Transações ilimitadas sem juros e taxas</QSTitle>
                    <QSdesc>Realize seus depósitos, transações, investimentos e muito mais! De forma prática e segura, sem burocracia, na palma da sua mão!</QSdesc>
                </QSContent>
            </Column>
        </QSWrapper>
      </QSContainer>
    </>
  )
}

export default QuemSomos
