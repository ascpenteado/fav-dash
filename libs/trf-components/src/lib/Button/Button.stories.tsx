// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import ButtonComponent from './Button.component';
import { ThemeColors } from '../../types/Colors';

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  argTypes: {
    variant: { control: 'select', options: [...Object.values(ThemeColors)] },
    onClick: {
      action: 'clicked',
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Flat: Story = {
  args: {
    children: 'Hello, world!',
    disabled: false,
    outline: false,
    variant: ThemeColors.PrimaryColor,
  },
};

export const Outline: Story = {
  args: {
    children: 'Hello, world!',
    disabled: false,
    outline: true,
    variant: ThemeColors.PrimaryColor,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Hello, world!',
    disabled: true,
    outline: false,
    variant: ThemeColors.PrimaryColor,
  },
};
