import {render, screen} from '@testing-library/react';
import {MemoryRouter as Router} from 'react-router-dom';
import MenuItem from './MenuItem';

const category = {title: 'T-shirt'};

describe('MenuItem', () => {
    it('renders categories', () => {
        render(
            <Router>
                <MenuItem category={category} />
            </Router>
        );

        const item = screen.getByRole('listitem');
        expect(item).toBeInTheDocument();
    });
});
