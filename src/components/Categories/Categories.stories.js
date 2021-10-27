import Categories from './Categories';

export default {
    title: 'Component/Categories',
    component: Categories,
};

const Template = (args) => <Categories {...args} />;

export const CategoryItems = Template.bind({});
CategoryItems.args = {
    allProducts: [
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
    product: {
        imageFrond:
            'https://www.kaft.com/static/images/cache/800/tisort_flyinglow_19186_800_800.jpg?cacheID=1629358586000',
        title: 'Flying Low',
        price: 105,
        category: {
            title: 't-shirt',
        },
    },
    title: ['Flying Low', 'basic-shirt'],
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
