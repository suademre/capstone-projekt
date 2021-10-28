import {render, screen} from '@testing-library/react';
import IconButtons from './IconButtons';

// product,
//     handleFavoriteButtonClick,
//     activeFavourite,
//     activeBaskets,
//     handleBasketButtonClick,
const product = {
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

const activeFavourite = true;
const activeBaskets = true;

describe('IconButtons remder', () => {
    it('remder IconButtons', () => {
        const handleFavoriteButtonClick = jest.fn();
        const handleBasketButtonClick = jest.fn();
        render(
            <IconButtons
                product={product}
                handleFavoriteButtonClick={handleFavoriteButtonClick}
                handleBasketButtonClick={handleBasketButtonClick}
                activeFavourite={activeFavourite}
                activeBaskets={activeBaskets}
            />
        );
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(2);
    });
});
