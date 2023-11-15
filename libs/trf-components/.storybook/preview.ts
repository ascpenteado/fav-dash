import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
    onClick: {
      action: 'clicked',
      table: { disable: true },
    },
  },
};

export default preview;
