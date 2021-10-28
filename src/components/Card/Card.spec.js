import {render, screen} from '@testing-library/react';
import Card from './Card';
import placeholder from '../../images/placeholder.png';
import {MemoryRouter as Router} from 'react-router-dom';

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

describe('Card', () => {
    it('render card', () => {
        const handleFavoriteButtonClick = jest.fn();
        const handleBasketButtonClick = jest.fn();
        render(
            <Router>
                <Card
                    product={product}
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
