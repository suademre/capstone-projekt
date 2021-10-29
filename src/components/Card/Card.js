import React from 'react';
import IconButtons from 'components/IconButtons/IconButtons';
import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';

function Card({
    product,
    favouriteItems,
    handleFavoriteButtonClick,
    basketItems,
    handleBasketButtonClick,
}) {
    return (
        <CardDiv>
            <Link to={'/' + product.category.title + '/' + product.slug}>
                <CardImg src={product.imageFrond} alt={product.title} />
            </Link>
            <CardInfo>
                <span>{product.title}</span>
                <span>{product.price} $</span>
            </CardInfo>
            <IconButtons
                product={product}
                activeFavourite={favouriteItems.some(
                    (item) => item.id === product.id
                )}
                handleFavoriteButtonClick={handleFavoriteButtonClick}
                activeBaskets={basketItems.some(
                    (item) => item.id === product.id
                )}
                handleBasketButtonClick={handleBasketButtonClick}
            />
        </CardDiv>
    );
}

const CardDiv = styled.div`
    width: 70%;
    background-color: #f2f3ee;
    display: block;
    color: #000;
    margin-top: 5rem;
    box-shadow: 0px 0px 10px #dedede;
    padding: 2.2rem 1.2rem;
`;

const CardImg = styled.img`
    width: 100%;
`;

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.5rem;
    font-size: 0.9rem;
`;

export default Card;
