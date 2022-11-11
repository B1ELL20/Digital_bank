import React from 'react'
import imgServ1 from '../../images/img1.svg'
import imgServ2 from '../../images/img4.svg'
import imgServ3 from '../../images/img5.svg'
import { 
    ServContent,
    ServWrapper,
    Servs,
    ServsImg,
    ImgServ,
    ServsText
} from './ServicosElements'

const Servicos = () => {
  return (
    <>
      <ServContent id="serv">
        <ServWrapper>
            <Servs>
                <ServsImg>
                    <ImgServ src={imgServ1} />
                </ServsImg>
                <ServsText>
                    Invista com facilidade e sem burocracia
                </ServsText>
            </Servs>
            <Servs>
                <ServsImg>
                    <ImgServ src={imgServ2} />
                </ServsImg>
                <ServsText>
                    Navegue com seguraça e sem preocupação
                </ServsText>
            </Servs>
            <Servs>
                <ServsImg>
                    <ImgServ src={imgServ3} />
                </ServsImg>
                <ServsText>
                    Realize transferências onde e quando quiser
                </ServsText>
            </Servs>
        </ServWrapper>
      </ServContent>
    </>
  )
}

export default Servicos
