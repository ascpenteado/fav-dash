import type { Meta, StoryObj } from '@storybook/react';
import BadgeComponent from './Badge.component';
import { ThemeColors } from '../../types/Colors';

const meta: Meta<typeof BadgeComponent> = {
  component: BadgeComponent,
  argTypes: {
    variant: { control: 'select', options: [...Object.values(ThemeColors)] },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '190px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BadgeComponent>;

export const Badge: Story = {
  args: {
    status: 'Validated',
    variant: ThemeColors.PrimaryColor,
  },
};
