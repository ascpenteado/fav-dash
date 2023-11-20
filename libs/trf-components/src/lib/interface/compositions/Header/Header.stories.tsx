import type { Meta, StoryObj } from '@storybook/react';
import HeaderComponent from './Header.component';

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

export const Header: Story = {
  args: {
    label: 'Seus favorecidos',
  },
};
