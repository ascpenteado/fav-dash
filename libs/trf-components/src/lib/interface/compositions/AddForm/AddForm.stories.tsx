import type { Meta, StoryObj } from '@storybook/react';
import AddFavoriteFormComponent from './AddForm.component';

const meta: Meta<typeof AddFavoriteFormComponent> = {
  component: AddFavoriteFormComponent,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddFavoriteFormComponent>;

export const AddForm: Story = {
  args: {},
};
