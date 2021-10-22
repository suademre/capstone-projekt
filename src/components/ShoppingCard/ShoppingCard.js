import CardList from 'components/CardList/CardList';

function ShoppingCard({
    // basketItems,
    // handleBasketButtonClick,
    // favouriteItems,
    // handleFavoriteButtonClick,
    ...props
}) {
    return (
        <CardList products={props.basketItems} {...props} />
    );
}


export default ShoppingCard;
