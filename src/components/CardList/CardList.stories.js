import CardList from './CardList';

export default {
    title: 'Component/CardList',
    component: CardList,
};

const Template = (args) => <CardList {...args} />;

export const CardListItem = Template.bind({});
CardListItem.args = {
    products: [
        {
            imageFrond:
                'https://www.kaft.com/static/images/cache/800/tisort_flyinglow_19186_800_800.jpg?cacheID=1629358586000',
            title: 'Flying Low',
            price: 105,
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
