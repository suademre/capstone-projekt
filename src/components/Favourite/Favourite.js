import Card from 'components/Card/Card';
import React from 'react';
import styled from 'styled-components/macro';

function Favourite({
    favourites,
    handleFavoriteButtonClick,
    baskets,
    handleBaskdetButtonClick,
}) {
    return (
        <div>
            <CardSection>
                {favourites.map((product, id) => (
                    <Card
                        product={product}
                        key={id}
                        favourites={favourites}
                        baskets={baskets}
                        handleFavoriteButtonClick={handleFavoriteButtonClick}
                        handleBaskdetButtonClick={handleBaskdetButtonClick}
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
