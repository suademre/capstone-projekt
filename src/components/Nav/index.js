import React, {useState} from 'react';

import {FaAlignJustify, FaBackspace} from 'react-icons/fa';

import {categories} from '../../data/category';
import MenuItem from 'components/Nav/MenuItem';
import {
    HeaderNav,
    SidebarSection,
    CloseButton,
    MenuList,
    MenuTittle,
} from './styles';

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
                    <MenuTittle>Categories</MenuTittle>
                    {categories.map((category) => (
                        <MenuItem key={category.id} category={category} />
                    ))}
                </MenuList>
            </SidebarSection>
        </>
    );
}

export default Nav;
