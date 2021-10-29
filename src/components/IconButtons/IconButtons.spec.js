import {render, screen} from '@testing-library/react';
import IconButtons from './IconButtons';
import userEvent from '@testing-library/user-event';

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
    it('remders IconButtons', () => {
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
    it('it calls product, when the user favourite button clicked', () => {
        const handleFavoriteButtonClick = jest.fn();
        render(
            <IconButtons
                product={product}
                handleFavoriteButtonClick={handleFavoriteButtonClick}
            />
        );
        const button = screen.getAllByRole('button');
        const favouriteButton = button[0];

        userEvent.click(favouriteButton);
        expect(handleFavoriteButtonClick).toHaveBeenCalledTimes(1);
        expect(handleFavoriteButtonClick).toHaveBeenCalledWith(product);
    });
    it('it calls product, when the user basket button clicked', () => {
        const handleBasketButtonClick = jest.fn();
        render(
            <IconButtons
                product={product}
                handleBasketButtonClick={handleBasketButtonClick}
            />
        );
        const button = screen.getAllByRole('button');
        const basketButton = button[1];

        userEvent.click(basketButton);
        expect(handleBasketButtonClick).toHaveBeenCalledTimes(1);
        expect(handleBasketButtonClick).toHaveBeenCalledWith(product);
    });
});
