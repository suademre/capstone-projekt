import {render, screen} from '@testing-library/react';
import {MemoryRouter as Router} from 'react-router-dom';
import Nav from '.';

describe('button', () => {
    it('renders button', () => {
        render(
            <Router>
                <Nav />
            </Router>
        );

        const buttonEl = screen.getAllByRole('button');
        expect(buttonEl).toHaveLength(2);
    });
});
