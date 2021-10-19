import Favourite from './Favourite';
import placeholder from '../../images/placeholder.png';

export default {
    title: 'Component/Favourite',
    component: Favourite,
};

const Template = (args) => <Favourite {...args} />;

export const FavouriteItems = Template.bind({});
FavouriteItems.args = {
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
