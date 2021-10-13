import React from 'react';
import styled from 'styled-components/macro';

function MenuItem({category}) {
    return (
        <li>
            <MenuItemA>{category.title}</MenuItemA>
        </li>
    );
}

const MenuItemA = styled.a`
    display: inline-block;
    padding: 7px 0;
    margin: 7px 0;
    color: #000;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 13px;
    border-bottom: 1px solid transparent;
    width: fit-content;
    transition: border-bottom, 0.3s ease-in;
    transition: color, 0.3s ease-in;
    &:hover {
        color: white;
    }
`;

export default MenuItem;
