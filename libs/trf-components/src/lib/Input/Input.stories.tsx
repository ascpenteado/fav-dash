import type { Meta, StoryObj } from '@storybook/react';
import InputComponent from './Input.component';
import mag from '../../assets/svg/magnifier.svg';
const meta: Meta<typeof InputComponent> = {
  component: InputComponent,
  argTypes: {
    onClick: { action: null },
    onInput: { action: 'onInput', table: { disable: true } },
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
type Story = StoryObj<typeof InputComponent>;

export const Base: Story = {
  args: {
    placeholder: 'Nome, CPF, agência ou conta',
    hasBorder: false,
  },
};

export const WithBorders: Story = {
  args: {
    placeholder: 'Nome, CPF, agência ou conta',
    hasBorder: true,
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: 'Nome, CPF, agência ou conta',
    hasBorder: false,
    iconUrl: mag,
  },
};
