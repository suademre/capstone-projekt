import React from 'react';
import styled from 'styled-components/macro';
import {MdBackspace} from 'react-icons/md';

function ProductDetail({allProducts, ...props}) {
    const item = props.match.params.item;

    const productDetail = allProducts.find((product) => product.slug === item);

    return (
        <>
            <BackButton onClick={() => props.history.goBack()}>
                <MdBackspace />
            </BackButton>

            <CardDiv>
                <CardImg
                    src={productDetail.imageFrond}
                    alt={productDetail.title}
                />
                <span>
                    {productDetail.title} : Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Fusce in urna purus. Quisque eu
                    sem ac dui pellentesque vulputate id id lacus. Ut eget ipsum
                    consequat, ornare ex nec, rhoncus quam.
                </span>
            </CardDiv>
        </>
    );
}

const BackButton = styled.button`
    margin-top: 8.5rem;
    margin-left: 3rem;
    border: none;
    font-size: 1.5rem;
`;

const CardDiv = styled.div`
    width: 96%;
    background-color: #f2f3ee;
    display: block;
    color: #000;
    margin: 2rem auto;
    box-shadow: 0px 0px 10px #dedede;
    padding: 2.2rem 1.2rem;
`;

const CardImg = styled.img`
    width: 100%;
`;

export default ProductDetail;
