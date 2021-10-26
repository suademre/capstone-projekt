import React, {useState} from 'react';

import {FaAlignJustify, FaBackspace} from 'react-icons/fa';

import {TiShoppingCart} from 'react-icons/ti';

import MenuItem from 'components/Nav/MenuItem';
import {
    HeaderNav,
    SidebarSection,
    CloseButton,
    MenuList,
    MenuTittle,
    OpenNavButton,
} from './styles';
import {Link} from 'react-router-dom';

function Nav({categories}) {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenuHandler = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <HeaderNav>
                <div>
                    <OpenNavButton
                        aria-label="Open navigation"
                        onClick={toggleMenuHandler}>
                        <FaAlignJustify />

                        <span>Menu</span>
                    </OpenNavButton>
                </div>

                <div>
                    <Link
                        to={'/'}
                        style={{textDecoration: 'none', color: 'black'}}>
                        Shopping Center
                    </Link>
                </div>
                <div>
                    <Link
                        to={'/shoppingcard'}
                        style={{textDecoration: 'none', color: 'black'}}>
                        <TiShoppingCart style={{fontSize: '30px'}} />
                    </Link>
                </div>
            </HeaderNav>
            <SidebarSection showMenu={showMenu}>
                <CloseButton
                    aria-label="Close navigation"
                    onClick={toggleMenuHandler}>
                    <FaBackspace />
                </CloseButton>

                <MenuList>
                    <MenuTittle>Categories</MenuTittle>
                    {categories.map((category) => (
                        <MenuItem
                            key={category.id}
                            category={category}
                            onToggleMenu={toggleMenuHandler}
                        />
                    ))}
                </MenuList>
            </SidebarSection>
        </>
    );
}

export default Nav;
