import type { Meta, StoryObj } from '@storybook/react';
import CheckboxComponent from './Checkbox.component';
const meta: Meta<typeof CheckboxComponent> = {
  component: CheckboxComponent,
  argTypes: {
    onChange: { action: 'onChange', table: { disable: true } },
    labelPosition: { control: 'inline-radio', options: ['before', 'after'] },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxComponent>;

export const Checkbox: Story = {
  args: {
    label: 'I will move this candidate to next phase',
    checked: false,
    labelPosition: 'after',
  },
};
