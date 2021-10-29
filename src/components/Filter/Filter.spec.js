import {render, screen} from '@testing-library/react';
import Filter from './Filter';
import userEvent from '@testing-library/user-event';

describe('Filter', () => {
    it('renders filter', () => {
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
    it('calls a function when is clicked and filtershow state is false', () => {
        const mockOnToggleFilterShow = jest.fn();
        render(
            <Filter
                onToggleFilterShow={mockOnToggleFilterShow}
                filter={false}
            />
        );

        const button = screen.getByRole('button');
        userEvent.click(button);
        expect(mockOnToggleFilterShow).toHaveBeenCalled();
    });
});
