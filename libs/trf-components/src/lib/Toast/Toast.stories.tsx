import type { Meta, StoryObj } from '@storybook/react';
import ToastComponent from './Toast.component';
import { ThemeColors } from '../../types/Colors';

const meta: Meta<typeof ToastComponent> = {
  component: ToastComponent,
  argTypes: {
    variant: { control: 'select', options: [...Object.values(ThemeColors)] },
    onClose: { action: 'onClose', table: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ToastComponent>;

export const WithTime: Story = {
  args: {
    message: 'Favorecido alterado com sucesso',
    variant: ThemeColors.PrimaryColor,
    duration: 3000,
    visible: true,
  },
};

export const WithoutTimer: Story = {
  args: {
    message: 'Favorecido alterado com sucesso',
    variant: ThemeColors.PrimaryColor,
    visible: true,
  },
};
