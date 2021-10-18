import {render, screen} from '@testing-library/react';
import Categories from './Categories';
import {MemoryRouter as Router} from 'react-router-dom';

describe('Categories', () => {
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
    it('render categories', () => {
        const handleFavoriteButtonClick = jest.fn();
        render(
            <Router>
                <Categories
                    favourites={favourites}
                    handleFavoriteButtonClick={handleFavoriteButtonClick}
                    match={{
                        params: {
                            slug: 't-shirt',
                        },
                    }}
                />
            </Router>
        );
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(10);
    });
});
