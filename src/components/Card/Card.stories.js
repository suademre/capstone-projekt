import Card from './Card';

export default {
    title: 'Component/Card',
    component: Card,
};

const Template = (args) => <Card {...args} />;

export const CardItem = Template.bind({});
CardItem.args = {
    id: '1',
    product: {
        imageFrond:
            'https://www.kaft.com/static/images/cache/800/tisort_flyinglow_19186_800_800.jpg?cacheID=1629358586000',
        title: 'Flying Low',
        price: 105,
        category: {
            title: 't-shirt',
        },
    },
    match: {
        params: {
            slug: 't-shirt',
        },
    },
    favouriteItems: [
        {
            id: 'et0',
            title: 'Flying Low',
            price: 105,
            imageFrond:
                'https://www.kaft.com/static/images/cache/800/tisort_flyinglow_19186_800_800.jpg?cacheID=1629358586000',
            slug: 'flying-low',
        },
    ],
    basketItems: [
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
    handleBasketButtonClick: () => console.log('access'),
};
