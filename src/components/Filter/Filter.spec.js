import {render, screen} from '@testing-library/react';
import Filter from './Filter';

describe('Filter', () => {
    it('render filter', () => {
        const filterShow = jest.fn();
        const onToggleFilterShow = jest.fn();
        const filterPrice = jest.fn();
        render(
            <Filter
                filter={filterShow}
                onToggleFilterShow={onToggleFilterShow}
                filterPrice={filterPrice}
            />
        );
        const buttons = screen.getByRole('button');
        expect(buttons).toBeInTheDocument();
    });
});
