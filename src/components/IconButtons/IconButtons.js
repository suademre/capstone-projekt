import React from 'react';
import {FaHeart} from 'react-icons/fa';
import {RiShoppingCartLine} from 'react-icons/ri';
import {RiShoppingCartFill} from 'react-icons/ri';
import styled from 'styled-components/macro';

function IconButtons({
    product,
    handleFavoriteButtonClick,
    active,
    activeBaskets,
    handleBaskdetButtonClick,
}) {
    return (
        <>
            <FavoriteButton
                active={active}
                onClick={() => {
                    handleFavoriteButtonClick(product);
                }}>
                <FaHeart
                    style={{fontSize: '20px', color: active ? 'red' : null}}
                />
            </FavoriteButton>
            <BasketButton
                activeBaskets={activeBaskets}
                onClick={() => {
                    handleBaskdetButtonClick(product);
                }}>
                {activeBaskets ? (
                    <RiShoppingCartFill />
                ) : (
                    <RiShoppingCartLine />
                )}
            </BasketButton>
        </>
    );
}

const FavoriteButton = styled.button`
    border: none;
    margin-left: 10%;
    margin-top: 10px;
`;

const BasketButton = styled.button`
    border: none;
    font-size: 25px;
    margin-left: 65%;
    margin-top: 10px;
`;

export default IconButtons;
