import {render, screen} from '@testing-library/react';
import Card from './Card';
import placeholder from '../../images/placeholder.png';

describe('Card', () => {
    const product = {
        id: 'et0',
        title: 'Flying Low',
        price: 105,
        imageFrond: placeholder,
        slug: 'flying-low',
    };

    const favourites = [
        {
            id: 'et0',
            title: 'Flying Low',
            price: 105,
            imageFrond:
                'https://www.kaft.com/static/images/cache/800/tisort_flyinglow_19186_800_800.jpg?cacheID=1629358586000',
            slug: 'flying-low',
        },
    ];

    it('render card', () => {
        const handleFavoriteButtonClick = jest.fn();
        render(
            <Card
                product={product}
                handleFavoriteButtonClick={handleFavoriteButtonClick}
                favourites={favourites}
            />
        );
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(1);
    });
});