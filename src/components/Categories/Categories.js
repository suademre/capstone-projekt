import Card from 'components/Card/Card';
import Filter from 'components/Filter/Filter';
import Footer from 'components/Footer/Footer';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import initialProductData from '../../data/data.json';

function Categories(props) {
    const [products, setProducts] = useState([]);
    const [filterShow, setFilterShow] = useState(false);
    /* const [filter, setFilter] = useState(false); */
    const toggleFilterShow = () => {
        setFilterShow(!filterShow);
        console.log(filterShow);
    };

    const slug = props.match.params.slug;
    const {favourites, handleFavoriteButtonClick} = props;

    /* const setFilterShow = (status) => {
        setFilter(status);
    }; */

    useEffect(() => {
        const items = initialProductData.filter(
            (product) => product.category.title === slug
        );
        setProducts(items);
    }, [slug]);

    const filterPrice = (status) => {
        const items = products;

        items.sort((a, b) => a.price - b.price);

        if (status === 'increase') {
            setProducts(items);
        } else {
            items.reverse();
            setProducts(items);
        }
    };

    return (
        <>
            <CardSection>
                {products.map((product, id) => (
                    <Card
                        product={product}
                        key={id}
                        favourites={favourites}
                        handleFavoriteButtonClick={handleFavoriteButtonClick}
                    />
                ))}
            </CardSection>
            <Footer toggleFilterShow={toggleFilterShow} />
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
