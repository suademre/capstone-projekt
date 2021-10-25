import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components/macro';

function MenuItem({category, onToggleMenu}) {
    return (
        <MenuItemA onClick={onToggleMenu}>
            <Link to={'/category/' + category.slug}>{category.title}</Link>
        </MenuItemA>
    );
}

const MenuItemA = styled.li`
    text-decoration: none;
    list-style: none;
    display: inline-block;
    padding: 7px 0;
    margin: 7px 0;
    color: #000;
    font-weight: bold;
    letter-spacing: 0.1rem;
    font-size: 0.9rem;
    border-bottom: 1px solid transparent;
    width: fit-content;
    transition: border-bottom, 0.3s ease-in;
    transition: color, 0.3s ease-in;
    &:hover {
        color: white;
        background-color: #cd5c5c;
    }
    &:visited {
        background-color: #f9f9f9;
    }
`;

export default MenuItem;
