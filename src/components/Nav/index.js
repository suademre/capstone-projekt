import React, {useState} from 'react';

import {FaAlignJustify, FaBackspace} from 'react-icons/fa';

import {TiShoppingCart} from 'react-icons/ti';

import categories from '../../data/category.json';
import MenuItem from 'components/Nav/MenuItem';
import {
    HeaderNav,
    SidebarSection,
    CloseButton,
    MenuList,
    MenuTittle,
} from './styles';
import {Link} from 'react-router-dom';

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

                <div>Shopping Center</div>
                <div>
                    <Link
                        to={'/shoppingcard'}
                        style={{textDecoration: 'none', color: 'black'}}>
                        <TiShoppingCart style={{fontSize: '30px'}} />
                    </Link>
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
