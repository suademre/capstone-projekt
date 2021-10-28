import {render, screen} from '@testing-library/react';
import CardList from './CardList';
import {MemoryRouter as Router} from 'react-router-dom';

const products = [
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

describe('CardList render', () => {
    it('render card list', () => {
        const handleFavoriteButtonClick = jest.fn();
        const handleBasketButtonClick = jest.fn();
        render(
            <Router>
                <CardList
                    products={products}
                    favouriteItems={favouriteItems}
                    basketItems={basketItems}
                    handleFavoriteButtonClick={handleFavoriteButtonClick}
                    handleBasketButtonClick={handleBasketButtonClick}
                />
            </Router>
        );
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(1);
    });
});
