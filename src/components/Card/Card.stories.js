import Card from './Card';
import placeholder from '../../images/placeholder.png';

export default {
    title: 'Component/Card',
    component: Card,
};

const Template = (args) => <Card {...args} />;

export const CardItem = Template.bind({});
CardItem.args = {
    id: '1',
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
    favourites: [
        {
            id: 'et0',
            title: 'Flying Low',
            price: 105,
            imageFrond:
                'https://www.kaft.com/static/images/cache/800/tisort_flyinglow_19186_800_800.jpg?cacheID=1629358586000',
            slug: 'flying-low',
        },
    ],
    handleFavoriteButtonClick: () => console.log('access'),
};
