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
                <Span>You haven't added any items yet.</Span>
            )}
        </>
    );
}

const Title = styled.h2`
    margin-top: 4.8rem;
    display: block;
    text-align: center;
`;

const Span = styled.span`
    margin-left: 5rem;
    font-size: 1rem;
`;

export default Favourite;
