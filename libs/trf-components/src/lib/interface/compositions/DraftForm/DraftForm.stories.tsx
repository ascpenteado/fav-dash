import type { Meta, StoryObj } from '@storybook/react';
import FavoriteDraftFormComponent from './DraftForm.component';
import Modal from '../../../elements/Modal/Modal.component';
import { Receiver } from '../../../../types/api';

const meta: Meta<typeof FavoriteDraftFormComponent> = {
  component: FavoriteDraftFormComponent,
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

const mock: Receiver = {
  id: '37f7e55c-b2a9-4cc6-a8fd-8062925f86c8',
  name: 'Rafael Costa',
  email: 'rafael.costa@exemplo.com',
  tax_id: '79915139000115',
  branch: '3402',
  account: '517638',
  account_type: 'Conta Poupança',
  bank_name: 'Santander',
  bank_code: '033',
  pix_key: '79915139000115',
  pix_key_type: 'cnpj',
  status: 'rascunho',
  created_at: '2023-10-25 16:01:10-03',
  updated_at: '2023-10-25 16:01:10-03',
};

export default meta;
type Story = StoryObj<typeof FavoriteDraftFormComponent>;

export const DraftForm: Story = {
  args: {
    favorite: mock,
  },
};
