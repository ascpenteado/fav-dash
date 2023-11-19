import type { Meta, StoryObj } from '@storybook/react';
import MenuComponent from './Menu.component';

const meta: Meta<typeof MenuComponent> = {
  component: MenuComponent,
  parameters: {
    backgrounds: {
      default: 'light',
    },
    layout: 'fullscreen',
  },
  argTypes: {
    onClose: {
      table: { disable: true },
      action: 'onClose',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuComponent>;

export const Menu: Story = {
  args: {
    showClose: false,
  },
};
