import React from 'react';
import CardList from 'components/CardList/CardList';

function Categories({allProducts, ...props}) {
    const slug = props.match.params.slug;

    // Filter by Category:
    const productsInCategory = allProducts.filter(
        (product) => product.category.title === slug
    );

    return <CardList products={productsInCategory} {...props} />;
}

export default Categories;
