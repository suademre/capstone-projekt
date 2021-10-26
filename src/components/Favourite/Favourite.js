import CardList from 'components/CardList/CardList';
import React from 'react';
import styled from 'styled-components/macro';

function Favourite({...props}) {
    return (
        <>
            <Title>Favourite Page</Title>
            {props.favouriteItems.length > 0 ? (
                <CardList products={props.favouriteItems} {...props} />
            ) : (
                <Span>You do not have a product on the favorite page.</Span>
            )}
        </>
    );
}

const Title = styled.h2`
    margin-top: 7rem;
    margin-left: 10rem;
    margin-bottom: 2rem;
`;

const Span = styled.span`
    margin-left: 5rem;
    font-size: 1rem;
`;

export default Favourite;
