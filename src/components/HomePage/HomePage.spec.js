import {render, screen} from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
    it('render hompage', () => {
        render(<HomePage />);
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
    });
});
