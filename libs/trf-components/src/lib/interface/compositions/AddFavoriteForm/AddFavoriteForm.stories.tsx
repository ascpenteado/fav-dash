import type { Meta, StoryObj } from '@storybook/react';
import AddFavoriteForm from './AddFavoriteForm.component';

const meta: Meta<typeof AddFavoriteForm> = {
  component: AddFavoriteForm,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddFavoriteForm>;

export const Listing: Story = {
  args: {},
};
