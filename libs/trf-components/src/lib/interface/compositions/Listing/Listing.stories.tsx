import type { Meta, StoryObj } from '@storybook/react';
import HeaderComponent from './Listing.component';

const meta: Meta<typeof HeaderComponent> = {
  component: HeaderComponent,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderComponent>;

export const Listing: Story = {
  args: {},
};
