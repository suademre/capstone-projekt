import CardList from 'components/CardList/CardList';
import React from 'react';

function ShoppingCard({...props}) {
    return <CardList products={props.basketItems} {...props} />;
}

export default ShoppingCard;
