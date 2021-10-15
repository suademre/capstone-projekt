import {render, screen} from '@testing-library/react';
import Categories from './Categories';
import {MemoryRouter as Router} from 'react-router-dom';

describe('Categories', () => {
    it('render categories', () => {
        render(
            <Router>
                <Categories
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
