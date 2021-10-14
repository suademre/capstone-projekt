import {MemoryRouter} from 'react-router';
import GlobalStyles from '../src/GlobalStyles';

export const decorators = [
    (Story) => (
        <MemoryRouter>
            <GlobalStyles />
            <Story />
        </MemoryRouter>
    ),
];

export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
