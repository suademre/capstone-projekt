import {render, screen} from '@testing-library/react';
import {MemoryRouter as Router} from 'react-router-dom';
import Nav from '.';

const categories = [
    {
        id: 'et0',
        title: 'Flying Low',
        price: 105,
        imageFrond:
            'https://www.kaft.com/static/images/cache/800/tisort_flyinglow_19186_800_800.jpg?cacheID=1629358586000',
        slug: 'flying-low',
    },
];

describe('button', () => {
    it('renders button', () => {
        render(
            <Router>
                <Nav categories={categories} />
            </Router>
        );

        const buttonEl = screen.getAllByRole('button');
        expect(buttonEl).toHaveLength(2);
    });
});
