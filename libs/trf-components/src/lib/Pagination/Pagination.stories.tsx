import type { Meta, StoryObj } from '@storybook/react';
import PaginationComponent, { PaginationProps } from './Pagination.component';
import { useState } from 'react';

const meta: Meta<typeof PaginationComponent> = {
  component: PaginationComponent,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    onPageChange: {
      table: { disable: true },
      action: 'page changed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PaginationComponent>;

const Template = (args: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <PaginationComponent
      {...args}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
};

export const Pagination: Story = {
  render: (args) => <Template {...args} />,
  args: {
    currentPage: 1,
    totalPages: 8,
  },
};
