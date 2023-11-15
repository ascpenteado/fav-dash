import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon.component';
import trashCan from '../../assets/svg/trashcan.svg';

const iconMeta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    iconUrl: { control: 'text' },
    altText: { control: 'text' },
  },
};

export default iconMeta;
type IconStory = StoryObj<typeof Icon>;

export const ExampleIcon: IconStory = {
  args: {
    iconUrl: trashCan,
    altText: 'Example Icon',
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  render: (args) => <Icon {...args} />,
};
