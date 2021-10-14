import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import Products from '../../data/data.json';

function Categories(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let items = Products.filter(
            (Product) => Product.category.title === props.match.params.slug
        );
        setProducts(items);
    }, [props.match.params.slug]);

    return (
        <CardSection>
            {products.map((product, index) => (
                <CardDiv key={index}>
                    <CardImg src={product.imageFrond} alt={product.title} />

                    <CardInfo>
                        <span>{product.title}</span>
                        <span>{product.price} $</span>
                    </CardInfo>
                </CardDiv>
            ))}
        </CardSection>
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

const CardDiv = styled.div`
    width: 70%;
    background-color: #f2f3ee;
    display: block;
    color: #000;
    margin-top: 3rem;
    box-shadow: 0px 0px 10px #dedede;
    padding: 2.2rem 1.2rem;
`;

const CardImg = styled.img`
    width: 100%;
`;

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.5rem;
    font-size: 0.9rem;
`;

export default Categories;
