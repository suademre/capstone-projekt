import {render, screen} from '@testing-library/react';
import Nav from '.';

describe('button', () => {
    it('renders button', () => {
        render(<Nav />);

        const buttonEl = screen.getAllByRole('button');
        expect(buttonEl).toHaveLength(2);
    });
});
