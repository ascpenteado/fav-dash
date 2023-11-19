import type { Meta, StoryObj } from '@storybook/react';
import SelectComponent from './Select.component';
const meta: Meta<typeof SelectComponent> = {
  component: SelectComponent,
  argTypes: {
    onSelect: { action: 'onSelect', table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof SelectComponent>;

export const Select: Story = {
  args: {
    options: [
      { label: 'E-mail', value: 'email' },
      { label: 'CPF', value: 'cpf' },
      { label: 'Phone', value: 'phone' },
    ],
  },
};
