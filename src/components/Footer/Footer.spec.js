import {render, screen} from '@testing-library/react';
import {MemoryRouter as Router} from 'react-router-dom';

import Footer from './footer';

describe('Footer', () => {
    it('renders', () => {
        render(
            <Router>
                <Footer />
            </Router>
        );
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
    });
});
