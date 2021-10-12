import Nav from '.'

export default { title: 'Nav', component: Nav }

const Template = args => <Nav {...args} />

export const menuOpen = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
