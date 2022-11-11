import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.div`

    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    padding-top: 30px;
    z-index: 999;
    transition: 0.4s ease-in-out;
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const SideClose = styled.div`

    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    margin-bottom: 30px;
`;

export const SideIcon = styled(FaTimes)`

    color: #702da3;
    font-size: 3rem;
    margin-right: 20px;
    cursor: pointer;
`;

export const SideLogo = styled.div`

    color: #702da3;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const SideList = styled.div`

    display: flex;
    flex-wrap: wrap;
    margin-top: 70px;
`;

export const SideItem = styled(LinkS)`

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    width: 100%;
    height: 100px;
    color: #702da3;
    cursor: pointer;

    &:hover {
        color: #fff;
        background-color: #702da3;
    }
`;