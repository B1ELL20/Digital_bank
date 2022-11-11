import styled from 'styled-components'

export const QSContainer = styled.section`

    margin-top: 5%;
    padding-bottom: 5%;
    width: 100%;
    background: #fff;
`;

export const QSWrapper = styled.div`

    display: flex;
    flex-wrap: wrap-reverse;
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

export const QSContent = styled.div`

    padding: 50px 0;
    margin-left: 30px;
    justify-self: center;
    width: 90%;
`;

export const QSTop = styled.h3`

    color: #FF4834;
    font-size: 1.2rem;
    padding-bottom: 10px;
`;

export const QSTitle = styled.h2`

    color: #702da3;
    font-size: 3rem;
    margin-bottom: 30px;
`;

export const QSdesc = styled.p`

    color: #702da3;
    font-size: 1.2rem;
`;

export const QSImg = styled.img`

    width: 350px;
    height: 350px;
    justify-self: center;

    @media screen and (max-width: 768px) {

        margin-bottom: 30px;
    }
`;