import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components/macro';

function Footer({onToggleFilterShow, count}) {
    return (
        <FooterMenu>
            <FooterItem onClick={onToggleFilterShow}>Sort</FooterItem>
            <FooterItem>
                <Link
                    style={{textDecoration: 'none', color: 'black'}}
                    to="/favourite">
                    Favourite
                </Link>
            </FooterItem>
            <FooterItem>Products: {count}</FooterItem>
        </FooterMenu>
    );
}

const FooterMenu = styled.section`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #ccc;
    border-radius: 10px;
`;

const FooterItem = styled.div`
    font-family: 'Titillium Web', sans-serif;
    padding: 15px 0;
    flex: 1;
    width: 100%;
    text-align: center;
    &:hover {
        background-color: #e7e8df;
        font-size: 0.9rem;
    }
`;

export default Footer;
