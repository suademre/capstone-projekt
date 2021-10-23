import CardList from 'components/CardList/CardList';
import React from 'react';

function Favourite({...props}) {
    return <CardList products={props.favouriteItems} {...props} />;
}

export default Favourite;
