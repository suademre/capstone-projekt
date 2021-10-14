import Categories from './Categories';
import placeholder from '../../images/placeholder.png';

export default {
    title: 'Component/Categories',
    component: Categories,
};

const Template = (args) => <Categories {...args} />;

export const CategoryItems = Template.bind({});
CategoryItems.args = {
    index: '1',
    product: {
        imageFrond: placeholder,
        title: 'Flying Low',
        price: 105,
    },
    match: {
        params: {
            slug: 't-shirt',
        },
    },
};
