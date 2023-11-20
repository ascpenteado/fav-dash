import type { Meta, StoryObj } from '@storybook/react';
import LoaderComponent from './Loader.component';

const meta: Meta<typeof LoaderComponent> = {
  component: LoaderComponent,
};

export default meta;
type Story = StoryObj<typeof LoaderComponent>;

export const Loader: Story = {};
