import Card from 'components/Card/Card';
import Filter from 'components/Filter/Filter';
import Footer from 'components/Footer/Footer';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro';

function Categories({
        favouriteItems,
        handleFavoriteButtonClick,
        basketItems,
        handleBasketButtonClick,
        allProducts,
        ...props
    }) {
    const slug = props.match.params.slug;

    // const [products, setProducts] = useState([]);
    const [filterShow, setFilterShow] = useState(false);
    const [sortByPriceStatus, setSortByPriceStatus] = useState("unsorted")

    // "unsorted" | "ascending" | "descending"
    const toggleFilterShow = () => {
        setFilterShow(!filterShow);
    };

    const filterPrice = (status) => setSortByPriceStatus(status)

    // Filter by Category:
    const productsInCategory = allProducts.filter(
        (product) => product.category.title === slug
    );

    // sort products by price:
    let shownProducts;
    if (sortByPriceStatus === 'increase') {
        shownProducts = [...productsInCategory].sort((a, b) => a.price - b.price);
    } else if (sortByPriceStatus === 'decrease'){
        shownProducts = [...productsInCategory].sort((a, b) => b.price - a.price);
    } else {
        shownProducts = productsInCategory
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
                toggleFilterShow={toggleFilterShow}
                count={shownProducts.length}
            />
            <Filter
                filterShow={filterShow}
                toggleFilterShow={toggleFilterShow}
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
    margin-top: 7rem;

    margin-bottom: 4rem;
`;

export default Categories;
