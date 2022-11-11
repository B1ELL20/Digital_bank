import styled from 'styled-components'
import { FaAndroid } from 'react-icons/fa'
import { FaAppStoreIos } from 'react-icons/fa'
import { FaWindows } from 'react-icons/fa'
export const AppContainer = styled.section`

    margin-top: 5%;
    padding-bottom: 5%;
    width: 100%;
    background: #fff;
`;

export const AppWrapper = styled.div`

    display: flex;
    flex-wrap: wrap;
    margin: 0 5%;
    max-width: 1100px;
    justify-content: center;
    align-items: center;
`;

export const Column = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 20px;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {

        width: 100%;
    }
`;

export const AppContent = styled.div`

    padding: 50px 0;
    margin-left: 30px;
    justify-self: center;
    width: 90%;

    @media screen and (max-width: 768px) {
        
        padding: 50px 0 0 0;
    }
`;

export const AppTitle = styled.h2`

    color: #702da3;
    font-size: 3rem;
    margin-bottom: 30px;
`;

export const Appdesc = styled.p`

    color: #702da3;
    font-size: 1.2rem;
    margin-bottom: 20px;
`;

export const BoxButton = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px 0;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        
        padding: 50px 0 0 0 ;
    }
`;

export const AppBtn = styled.button`

    border-radius: 20px;
    background: #702da3;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 20px;
    color: #fff;
    border: none;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        
        width: 90%;
        margin-bottom: 20px;
        justify-content: center;
    }
`;

export const AndroidIcon = styled(FaAndroid)`

    color: #fff;
    font-size: 20px;
    margin-right: 10px;
`;

export const IosIcon = styled(FaAppStoreIos)`

    color: #fff;
    font-size: 20px;
    margin-right: 10px;
`;

export const WindowsIcon = styled(FaWindows)`

    color: #fff;
    font-size: 20px;
    margin-right: 10px;
`;

export const AppImg = styled.img`

    width: 400px;
    height: 350px;
    justify-self: center;
`;