import React from 'react';
import {FaHeart} from 'react-icons/fa';
import {RiShoppingCartLine} from 'react-icons/ri';
import {RiShoppingCartFill} from 'react-icons/ri';
import styled from 'styled-components/macro';

function IconButtons({
    product,
    handleFavoriteButtonClick,
    favouriteActiv,
    basketActiv,
    handleBasketButtonClick,
}) {
    return (
        <>
            <FavoriteButton
                favouriteActiv={favouriteActiv}
                onClick={() => {
                    handleFavoriteButtonClick(product);
                }}>
                <FaHeart
                    style={{
                        fontSize: '20px',
                        color: favouriteActiv ? 'red' : null,
                    }}
                />
            </FavoriteButton>
            <BasketButton
                onClick={() => {
                    handleBasketButtonClick(product);
                }}>
                {basketActiv ? <RiShoppingCartFill /> : <RiShoppingCartLine />}
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
