import ProductDetail from './ProductDetail';

export default {
    title: 'Component/ProductDetail',
    component: ProductDetail,
};

const Template = (args) => <ProductDetail {...args} />;

export const ProductDetailItems = Template.bind({});
ProductDetailItems.args = {
    allProducts: [
        {
            id: 'et0',
            title: 'Flying Low',
            price: 105,
            imageFrond:
                'https://www.kaft.com/static/images/cache/800/tisort_flyinglow_19186_800_800.jpg?cacheID=1629358586000',
            slug: 't-shirt',
            category: {
                title: 't-shirt',
            },
        },
    ],

    match: {
        params: {
            item: 't-shirt',
        },
    },
};
