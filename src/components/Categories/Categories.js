import Card from 'components/Card/Card';
import Footer from 'components/Footer/Footer';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import initialProductData from '../../data/data.json';

function Categories(props) {
    const [products, setProducts] = useState([]);

    const slug = props.match.params.slug;
    const {favourites, handleFavoriteButtonClick} = props;

    useEffect(() => {
        const items = initialProductData.filter(
            (product) => product.category.title === slug
        );
        setProducts(items);
    }, [slug]);

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
            <Footer />
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
