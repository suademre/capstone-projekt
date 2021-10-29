import {render, screen} from '@testing-library/react';
import Categories from './Categories';
import {MemoryRouter as Router} from 'react-router-dom';
import placeholder from '../../images/placeholder.png';

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
const product = {
    id: 'et0',
    title: 'Flying Low',
    price: 105,
    imageFrond: placeholder,
    slug: 'flying-low',
    category: {
        title: 'flying-low',
    },
};

const favouriteItems = [
    {
        id: 'et0',
        title: 'Flying Low',
        price: 105,
        imageFrond:
            'https://www.kaft.com/static/images/cache/800/tisort_flyinglow_19186_800_800.jpg?cacheID=1629358586000',
        slug: 'flying-low',
    },
];
const basketItems = [
    {
        id: 'et0',
        title: 'Flying Low',
        price: 105,
        imageFrond:
            'https://www.kaft.com/static/images/cache/800/tisort_flyinglow_19186_800_800.jpg?cacheID=1629358586000',
        slug: 'flying-low',
    },
];

describe('Categories', () => {
    it('renders categories', () => {
        const handleFavoriteButtonClick = jest.fn();
        const handleBasketButtonClick = jest.fn();
        render(
            <Router>
                <Categories
                    allProducts={allProducts}
                    product={product}
                    favouriteItems={favouriteItems}
                    basketItems={basketItems}
                    handleFavoriteButtonClick={handleFavoriteButtonClick}
                    handleBasketButtonClick={handleBasketButtonClick}
                    match={{
                        params: {
                            slug: 'flying-low',
                        },
                    }}
                />
            </Router>
        );
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(1);
    });
});
