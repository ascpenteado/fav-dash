// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import ButtonComponent from './Button.component';
import { ThemeColors } from '../../types/Colors';
import Icon from '../Icon/Icon.component';
import plusIcon from '../../assets/svg/plus-icon.svg';

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  argTypes: {
    variant: { control: 'select', options: [...Object.values(ThemeColors)] },
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

export const WithIcon: Story = {
  args: {
    children: <Icon iconUrl={plusIcon} />,
    disabled: false,
    outline: false,
    responsive: true,
    style: { borderRadius: '50%', padding: '.4rem' },
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
