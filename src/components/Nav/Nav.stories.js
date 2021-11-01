import Nav from '.';

export default {title: 'Component/Nav', component: Nav};

const Template = (args) => <Nav {...args} />;

export const menuOpen = Template.bind({});
menuOpen.args = {
    categories: [
        {
            id: '0',
            slug: 't-shirt',
            icon: '',
            title: 'T-shirt',
            description:
                'Bir avuç insan kalmıştık varlığımızı kutlayacak ve bildiğimiz tüm dilleri unutmuştuk.',
            size: ['S', 'M', 'L', 'XL', '2XL'],
        },
    ],
};
