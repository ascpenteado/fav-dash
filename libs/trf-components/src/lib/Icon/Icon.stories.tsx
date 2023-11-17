import type { Meta, StoryObj } from '@storybook/react';
import IconComponent from './Icon.component';
import trashCan from '../../assets/svg/trashcan.svg';

const iconMeta: Meta<typeof IconComponent> = {
  title: 'Icon',
  component: IconComponent,
};

export default iconMeta;
type IconStory = StoryObj<typeof IconComponent>;

export const Icon: IconStory = {
  args: {
    iconUrl: trashCan,
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  render: (args) => <IconComponent {...args} />,
};
