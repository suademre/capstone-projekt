import Card from 'components/Card/Card';
import React from 'react';
import styled from 'styled-components/macro';

function Favourite({favourites, handleFavoriteButtonClick}) {
    return (
        <div>
            <CardSection>
                {favourites.map((product, id) => (
                    <Card
                        product={product}
                        key={id}
                        favourites={favourites}
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

export default Favourite;
