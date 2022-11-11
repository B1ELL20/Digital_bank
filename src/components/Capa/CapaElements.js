import styled from 'styled-components'

export const CapaContainer = styled.header`

    display: flex;
    flex-wrap: wrap;
    padding: 0;
    background: #702da3;
    padding: 70px 0;

    @media screen and (max-width: 768px) {

        flex-wrap: wrap-reverse;
    }
`;

export const Column = styled.div`

    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:768px) {
        
        width: 100%;
        flex-wrap: wrap-reverse;
    }
`;

export const CapaContent = styled.div`

    padding: 20px 30px;
    padding-left: 100px;
    justify-self: center;

    @media screen and (max-width:768px) {
        
        padding-left: 50px;
    }
`;

export const CapaH1 = styled.h1`

    font-size: 48px;
    color: #fff;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {

        font-size: 40px;
    }
`;

export const CapaP = styled.p`

    font-size: 20px;
    color: #fff;
    margin-bottom: 20px;
`;

export const CapaBtn = styled.button`

    border-radius: 50px;
    color: #fff;
    background-color: #FF4834;
    font-size: 25px;
    font-weight: 500;
    border: none;
    padding: 10px 40px;
    margin-top: 20px;
`;

export const CapaImg = styled.img`

    width: 400px;
    height: 400px;
    cursor: pointer;

    @media screen and (max-width:768px) {
        
        width: 300px;
        height: 300px;
        margin-bottom: 50px;
    }
`;

export const CapaWave = styled.img`

    width: 100%;
`;
