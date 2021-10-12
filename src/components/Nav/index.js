import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {FaAlignJustify, FaBackspace} from 'react-icons/fa';

function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <HeaderNav>
                <div className="menu-icon" id="open">
                    <button
                        data-testid="navButton"
                        aria-label="navButton"
                        onClick={toggleMenu}>
                        <FaAlignJustify />
                    </button>

                    <span>Menu</span>
                </div>
            </HeaderNav>
            <SidebarSection showMenu={showMenu}>
                <StyledIcon>
                    <FaBackspace onClick={toggleMenu} />
                </StyledIcon>

                <Wrapper>
                    <MenuTitle>Categories</MenuTitle>
                </Wrapper>
            </SidebarSection>
        </div>
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
    width: 80vw;
    height: 100vh;
    background-color: gray;
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

const StyledIcon = styled.button`
    position: absolute;
    font-size: 15px;
    top: 50px;
    left: 50px;
    color: #000;
    background-color: gray;
`;

const Wrapper = styled.ul`
    margin-top: 100px;
    margin-left: 40px;
`;

const MenuTitle = styled.li`
    font-size: 15px;
`;

export default Nav;
