import {render, screen} from '@testing-library/react';
import MenuItem from './MenuItem';

const category = {title: 'T-shirt'};

describe('MenuItem', () => {
    it('renders categories', () => {
        render(<MenuItem category={category} />);

        const item = screen.getByRole('listitem');
        expect(item).toBeInTheDocument();
    });
});
