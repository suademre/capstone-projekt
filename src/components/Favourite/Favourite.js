import CardList from "components/CardList/CardList";

function Favourite({
    // favouriteItems,
    // handleFavoriteButtonClick,
    // basketItems,
    // handleBasketButtonClick,

    ...props
}) {
    return (<CardList products={props.favouriteItems} {...props} />
    );
}

export default Favourite;
