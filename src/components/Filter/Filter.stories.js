import Filter from './Filter';

export default {
    title: 'Component/Filter',
    component: Filter,
};

const Template = (args) => <Filter {...args} />;

export const FilterItems = Template.bind({});
FilterItems.args = {
    filterShow: () => console.log('access'),
    onToggleFilterShow: () => console.log('access'),
    filterPrice: () => console.log('access'),
};
