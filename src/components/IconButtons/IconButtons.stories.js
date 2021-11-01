import IconButtons from './IconButtons';

export default {
    title: 'Component/IconButtons',
    component: IconButtons,
};

const Template = (args) => <IconButtons {...args} />;

export const IconButtonsItem = Template.bind({});
IconButtonsItem.args = {
    product: {
        imageFrond:
            'https://www.kaft.com/static/images/cache/800/tisort_flyinglow_19186_800_800.jpg?cacheID=1629358586000',
        title: 'Flying Low',
        price: 105,
        category: {
            title: 't-shirt',
        },
    },

    favouriteActiv: true,
    basketActiv: true,

    handleFavoriteButtonClick: () => console.log('access'),
    handleBasketButtonClick: () => console.log('access'),
};
