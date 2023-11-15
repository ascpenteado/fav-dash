// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import ButtonComponent from './Button.component';

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  argTypes: { onClick: { action: 'clicked' } },
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
  // render: () => <Button onClick={() => console.log('hi')} disabled={true}>Click me</Button>,
  args: {
    children: 'Hello, world!',
    disabled: false,
  },
};
