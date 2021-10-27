import HomePage from './HomePage';
import homePAgeImg from 'assets/images/homeimage.jpeg';

export default {title: 'Component/HomePage', component: HomePage};

const Template = (args) => <HomePage {...args} />;

export const HomePageItem = Template.bind({});
HomePageItem.args = {
    img: homePAgeImg,
};
