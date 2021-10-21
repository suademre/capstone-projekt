import Card from 'components/Card/Card';
import React from 'react';
import styled from 'styled-components/macro';

function ShoppingCard({
    basketItems,
    handleBasketButtonClick,
    favouriteItems,
    handleFavoriteButtonClick,
}) {
    return (
        <div>
            <CardSection>
                {basketItems.map((product, id) => (
                    <Card
                        product={product}
                        key={id}
                        basketItems={basketItems}
                        favouriteItems={favouriteItems}
                        handleBasketButtonClick={handleBasketButtonClick}
                        handleFavoriteButtonClick={handleFavoriteButtonClick}
                    />
                ))}
            </CardSection>
        </div>
    );
}

const CardSection = styled.section`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 7rem;

    margin-bottom: 4rem;
`;

export default ShoppingCard;
