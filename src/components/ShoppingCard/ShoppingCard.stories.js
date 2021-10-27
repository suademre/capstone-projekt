import ShoppingCard from './ShoppingCard';

export default {
    title: 'Component/ShoppingCard',
    component: ShoppingCard,
};

const Template = (args) => <ShoppingCard {...args} />;

export const ShoppingCardItems = Template.bind({});
ShoppingCardItems.args = {
    products: [
        {
            id: 'et0',
            title: 'Flying Low',
            price: 105,
            imageFrond:
                'https://www.kaft.com/static/images/cache/800/tisort_flyinglow_19186_800_800.jpg?cacheID=1629358586000',
            slug: 'flying-low',
            category: {
                title: 't-shirt',
            },
        },
    ],

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
