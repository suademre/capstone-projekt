import {render, screen} from '@testing-library/react';
import ProductDetail from './ProductDetail';
import {MemoryRouter as Router} from 'react-router-dom';

const allProducts = [
    {
        id: 'et0',
        title: 'Flying Low',
        price: 105,
        imageFrond:
            'https://www.kaft.com/static/images/cache/800/tisort_flyinglow_19186_800_800.jpg?cacheID=1629358586000',
        slug: 'flying-low',
        category: {
            title: 'flying-low',
        },
    },
];

const productDetail = {
    id: 'et0',
    title: 'Flying Low',
    price: 105,
    imageFrond:
        'https://www.kaft.com/static/images/cache/800/tisort_flyinglow_19186_800_800.jpg?cacheID=1629358586000',
    slug: 'flying-low',
    category: {
        title: 'flying-low',
    },
};

describe('ProductDetail', () => {
    it('render Product Detail', () => {
        render(
            <Router>
                <ProductDetail
                    allProducts={allProducts}
                    productDetail={productDetail}
                    match={{
                        params: {
                            item: 'flying-low',
                        },
                    }}
                />
            </Router>
        );
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
    });
});
