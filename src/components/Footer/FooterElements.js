import styled from 'styled-components'

export const FooterContainer = styled.footer`

    width: 100%;
    background-color: #702da3;
    padding: 30px 0;
`;

export const FooterWrapper = styled.div`

    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;

    @media screen and (max-width: 768px) {

        justify-content: start;
        padding-left: 30px;
    }
`;

export const Column = styled.div`

    text-align: start;
    padding: 20px;

`;

export const Title = styled.h3`

    font-size: 1.2rem;
    color: #fff;
    margin-bottom: 10px;
`;

export const Lista = styled.ul`

    list-style: none;
`;

export const Item = styled.li`

    padding: 5px 0;
    font-size: 1rem;
    color: #fff;
    display: flex;
    align-items: center;

    &:hover {

        color: #FF4834;
        cursor: pointer;
    }
`;

export const SocialBox = styled.div`

    display: flex;
    padding: 10px 0;
    margin-bottom: 20px;
    font-size: 30px;
    color: #fff;
`;

export const FooterWave = styled.img`

    width: 100%;
    height: 150px;
`;

export const Box = styled.div`

    height: 100px;
`;

export const Text = styled.div`

    margin-left: 10px;
`;

export const LinkCredito = styled.a`

    color: #fff;
    text-decoration: none;
    cursor: pointer;

    &:hover{
        color: #FF4834;
    }
`;