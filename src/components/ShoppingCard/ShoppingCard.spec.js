import {render, screen} from '@testing-library/react';
import ShoppingCard from './ShoppingCard';
import {MemoryRouter as Router} from 'react-router-dom';

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
const product = [
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

describe('Shopping Card', () => {
    it('renders Shopping Card', () => {
        const handleBasketButtonClick = jest.fn();
        const handleFavoriteButtonClick = jest.fn();
        render(
            <Router>
                <ShoppingCard
                    favouriteItems={favouriteItems}
                    basketItems={basketItems}
                    products={product}
                    handleFavoriteButtonClick={handleFavoriteButtonClick}
                    handleBasketButtonClick={handleBasketButtonClick}
                    match={{
                        params: {
                            slug: 't-shirt',
                        },
                    }}
                />
            </Router>
        );
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(1);
    });
});
