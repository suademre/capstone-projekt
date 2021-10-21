import Card from 'components/Card/Card';
import React from 'react';
import styled from 'styled-components/macro';

function ShoppingCard({
    baskets,
    handleBaskdetButtonClick,
    favourites,
    handleFavoriteButtonClick,
}) {
    console.log('baskets', baskets);
    return (
        <div>
            <CardSection>
                {baskets.map((product, id) => (
                    <Card
                        product={product}
                        key={id}
                        baskets={baskets}
                        favourites={favourites}
                        handleBaskdetButtonClick={handleBaskdetButtonClick}
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
