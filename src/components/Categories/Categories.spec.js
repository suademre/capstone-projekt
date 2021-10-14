import {render, screen} from '@testing-library/react';
import Categories from './Categories';
import placeholder from '../../images/placeholder.png';

describe('Categories', () => {
    it('render categories', () => {
        render(
            <Categories
                match={{
                    params: {
                        slug: 't-shirt',
                    },
                }}
            />
        );
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(10);
    });
});
