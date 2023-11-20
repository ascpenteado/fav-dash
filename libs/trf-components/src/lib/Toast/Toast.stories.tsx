import type { Meta, StoryObj } from '@storybook/react';
import ToastComponent from './Toast.component';
import { Colors } from '../../types/Colors';

const meta: Meta<typeof ToastComponent> = {
  component: ToastComponent,
  argTypes: {
    variant: { control: 'select', options: [...Object.values(Colors)] },
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

export const WithTimer: Story = {
  args: {
    message: 'Favorecido alterado com sucesso',
    variant: Colors.PrimaryColor,
    duration: 3000,
    visible: true,
  },
};

export const WithoutTimer: Story = {
  args: {
    message: 'Favorecido alterado com sucesso',
    variant: Colors.PrimaryColor,
    visible: true,
  },
};
