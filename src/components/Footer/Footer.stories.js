import Footer from './Footer';

export default {
    title: 'Component/Footer',
    component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const FooterItems = Template.bind({});
FooterItems.args = {
    count: '120',
    onToggleFilterShow: () => console.log('access'),
};
