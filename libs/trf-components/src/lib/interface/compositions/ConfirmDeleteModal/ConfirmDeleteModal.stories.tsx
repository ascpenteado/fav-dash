import type { Meta, StoryObj } from '@storybook/react';
import ConfirmDeleteModalComponent from './ConfirmDeleteModal.component';
import Modal from '../../../elements/Modal/Modal.component';

const meta: Meta<typeof ConfirmDeleteModalComponent> = {
  component: ConfirmDeleteModalComponent,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
  decorators: [
    (Story) => (
      <Modal isOpen={true} onClose={() => console.log('closed')}>
        <Story />
      </Modal>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ConfirmDeleteModalComponent>;

export const ConfirmDeleteModal: Story = {
  args: {
    confirmText: 'Confirma a exclusão dos selecionados?',
  },
};
