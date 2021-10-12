import React, {useState} from 'react';
import styled, {css} from 'styled-components/macro';
import {FaAlignJustify, FaBackspace} from 'react-icons/fa';

function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <HeaderNav>
                <div>
                    <button aria-label="Open navigation" onClick={toggleMenu}>
                        <FaAlignJustify />

                        <span>Menu</span>
                    </button>
                </div>
            </HeaderNav>
            <SidebarSection showMenu={showMenu}>
                <CloseButton aria-label="Close navigation" onClick={toggleMenu}>
                    <FaBackspace />
                </CloseButton>

                <MenuList>
                    <MenuItem>Categories</MenuItem>
                </MenuList>
            </SidebarSection>
        </>
    );
}

const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 50px 40px;
    font-size: 16px;
    position: fixed;
    top: 0;
    width: 100vw;
    color: #000;
    z-index: 100;
`;
const SidebarSection = styled.section`
    position: fixed;
    top: 0;
    width: 70vw;
    height: 100vh;
    background-color: #f9f9f9;
    z-index: 101;
    transition: left 0.4sn ease;
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

const CloseButton = styled.button`
    position: absolute;
    font-size: 15px;
    top: 50px;
    left: 50px;
    color: #000;
    background-color: gray;
`;

const MenuList = styled.ul`
    margin-top: 100px;
    margin-left: 40px;
`;

const MenuItem = styled.li`
    font-size: 15px;
`;

export default Nav;
