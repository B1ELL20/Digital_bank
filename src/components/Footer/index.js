import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLocationArrow } from 'react-icons/fa'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import wave from '../../images/wave_bottom.svg'
import { Link } from 'react-router-dom'
import { 
    FooterContainer,
    FooterWrapper,
    Column,
    Title,
    Lista,
    Item,
    SocialBox,
    FooterWave,
    Text,
    Box,
    LinkCredito
} from './FooterElements'

const FooterBank = () => {
  return (
    <>  
        
        <Box><FooterWave src={wave}/></Box>
        <FooterContainer>
            <FooterWrapper>
                <Column>
                    <Title>Contato</Title>
                    <Lista>
                        <Item><FaPhone/>
                            <Text>(00) 90000-0000</Text>
                        </Item>
                        <Item><FaWhatsapp/>
                            <Text>(00) 90000-0000</Text>
                        </Item>
                        <Item><AiOutlineMail/>
                            <Text>digitalbank@email.com</Text>
                        </Item>
                        <Item><FaLocationArrow/>
                            <Text>Rua tal, bairro tal - Cidade</Text> 
                        </Item>
                    </Lista>
                </Column>
                <Column>
                    <Title>Serviços</Title>
                    <Lista>
                        <Item>Segurança</Item>
                        <Item>Investimento</Item>
                        <Item>Cash back</Item>
                        <Item>Atendimento facilitado</Item>
                    </Lista>
                </Column>
                <Column>
                    <Title>Redes sociais</Title>
                    <SocialBox>
                        <AiFillFacebook/>
                        <Text><AiFillInstagram/></Text>
                        <Text><AiFillTwitterCircle/></Text>
                    </SocialBox>
                    <Title>Ilustrações</Title>
                    <LinkCredito href="https://undraw.co/" target="_blank">https://undraw.co/</LinkCredito>
                </Column>
            </FooterWrapper>
        </FooterContainer> 
    </>
  )
}

export default FooterBank
