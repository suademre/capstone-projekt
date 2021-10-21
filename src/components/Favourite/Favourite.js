import Card from 'components/Card/Card';
import React from 'react';
import styled from 'styled-components/macro';

function Favourite({
    favouriteItems,
    handleFavoriteButtonClick,
    basketItems,
    handleBasketButtonClick,
}) {
    return (
        <div>
            <CardSection>
                {favouriteItems.map((product, id) => (
                    <Card
                        product={product}
                        key={id}
                        favouriteItems={favouriteItems}
                        basketItems={basketItems}
                        handleFavoriteButtonClick={handleFavoriteButtonClick}
                        handleBasketButtonClick={handleBasketButtonClick}
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

export default Favourite;
