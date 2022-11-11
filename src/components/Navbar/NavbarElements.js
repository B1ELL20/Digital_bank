import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'


export const Nav = styled.nav`

    width: 100%;
    height: 80px;
    position: sticky;
    top: 0;
    padding: 0 50px;
    background: #fff;

    @media screen and (max-width:768px) {

        position: static;
    }
`;

export const NavbarContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 10px 20px;

    @media screen and (max-width: 768px) {

        padding: 10px 0;
    }
`;

export const NavbarLogo = styled.div`

    color: #702da3;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 768px) {

        margin-left: 0;
    }
`;

export const MobileIcon = styled.div`

    display: none;

    @media screen and (max-width: 768px) {

        display: block;
        font-size: 1.8rem;
        cursor: pointer;
        color: #702da3;
        justify-self: end;
    }
`;

export const NavbarList = styled.ul`

    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: 30px;

    @media screen and (max-width: 768px) {

        display: none;
    }
`;

export const NavbarItem = styled.li`

    margin: 0 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavbarLink = styled(LinkS)`

    text-decoration: none;
    color: #702da3;
    font-size: 20px;
    font-weight: 200;
    cursor: pointer;

    &:hover {

        color: #ff4834
    }
`;