import Card from 'components/Card/Card';
import Filter from 'components/Filter/Filter';
import Footer from 'components/Footer/Footer';
import React, {useState} from 'react';
import styled from 'styled-components/macro';

function CardList({
    favouriteItems,
    handleFavoriteButtonClick,
    basketItems,
    handleBasketButtonClick,
    products,
}) {
    const [filterShow, setFilterShow] = useState(false);
    const [sortByPriceStatus, setSortByPriceStatus] = useState('unsorted');

    // "unsorted" | "ascending" | "descending"
    const toggleFilterShowHandler = () => {
        setFilterShow(!filterShow);
    };

    const filterPrice = (status) => setSortByPriceStatus(status);

    // sort products by price:
    let shownProducts;
    if (sortByPriceStatus === 'increase') {
        shownProducts = [...products].sort((a, b) => a.price - b.price);
    } else if (sortByPriceStatus === 'decrease') {
        shownProducts = [...products].sort((a, b) => b.price - a.price);
    } else {
        shownProducts = products;
    }

    return (
        <>
            <CardSection>
                {shownProducts.map((product, id) => (
                    <Card
                        product={product}
                        key={id}
                        favouriteItems={favouriteItems}
                        handleFavoriteButtonClick={handleFavoriteButtonClick}
                        basketItems={basketItems}
                        handleBasketButtonClick={handleBasketButtonClick}
                    />
                ))}
            </CardSection>
            <Footer
                onToggleFilterShow={toggleFilterShowHandler}
                count={shownProducts.length}
            />
            <Filter
                filterShow={filterShow}
                onToggleFilterShow={toggleFilterShowHandler}
                filterPrice={filterPrice}
            />
        </>
    );
}

const CardSection = styled.section`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 4rem;
`;

export default CardList;
