import {render, screen} from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
    it('renders hompage', () => {
        render(<HomePage />);
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
    });
    it('has an alt attribute', () => {
        render(<HomePage />);

        const alt = screen.getByAltText('HomeImg');
        expect(alt).toBeInTheDocument();
    });
});
