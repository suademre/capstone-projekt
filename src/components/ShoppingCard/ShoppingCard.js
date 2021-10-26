import CardList from 'components/CardList/CardList';
import React from 'react';
import styled from 'styled-components/macro';

function ShoppingCard({...props}) {
    return (
        <>
            <Title>Shopping Card</Title>
            {props.basketItems.length > 0 ? (
                <CardList products={props.basketItems} {...props} />
            ) : (
                <Span>You haven't added any items yet.</Span>
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

export default ShoppingCard;
