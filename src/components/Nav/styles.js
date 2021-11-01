import styled, {css} from 'styled-components/macro';

export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 30px 35px;
    font-size: 16px;
    position: fixed;
    top: 0;
    width: 100vw;
    color: #000;
    z-index: 100;
    background-color: rgba(230, 233, 222, 0.5);
`;

export const OpenNavButton = styled.button`
    border: none;
    font-size: 1rem;
    background-color: transparent;
`;

export const SidebarSection = styled.section`
    position: fixed;
    top: 0;
    width: 70vw;
    height: 100vh;
    background-color: #f8f9f6;
    z-index: 101;
    transition: left 0.4s ease;
    padding-right: 120px;
    ${({showMenu}) =>
        showMenu
            ? css`
                  left: 0;
              `
            : css`
                  left: -100vw;
              `}
`;

export const CloseButton = styled.button`
    position: absolute;
    font-size: 20px;
    top: 50px;
    left: 50px;
    color: #000;
    background-color: #f2f3ee;
    border: none;
`;

export const MenuList = styled.ul`
    margin-top: 100px;
    margin-left: 40px;
    list-style: none;
`;

export const MenuTittle = styled.h3`
    font-size: 25px;
    margin-bottom: 20px;
`;
