import { Receiver } from '../../types/api.type';
import { receiverActions } from './receivers.action';
import { receiverStore } from './receivers.state';

describe('Receivers State', () => {
  it('should load initial receivers with valid data', () => {
    // Arrange
    const initialReceivers: Receiver[] = [
      {
        id: '1',
        name: 'John Doe',
        email: 'johndoe@example.com',
        tax_id: '123456789',
        branch: null,
        account: null,
        account_type: null,
        bank_name: null,
        bank_code: null,
        pix_key: 'johndoe@example.com',
        pix_key_type: 'email',
        status: 'rascunho',
        created_at: '2021-01-01',
        updated_at: '2021-01-01',
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        tax_id: '987654321',
        branch: null,
        account: null,
        account_type: null,
        bank_name: null,
        bank_code: null,
        pix_key: 'janesmith@example.com',
        pix_key_type: 'email',
        status: 'validado',
        created_at: '2021-01-01',
        updated_at: '2021-01-01',
      },
    ];

    // Act
    receiverActions.loadInitialReceivers(initialReceivers);

    // Assert
    expect(receiverStore.receivers).toEqual(initialReceivers);
  });

  it('should add a new receiver to the list', () => {
    // Arrange
    const newReceiver: Receiver = {
      id: '3',
      name: 'Bob Johnson',
      email: 'bobjohnson@example.com',
      tax_id: '456789123',
      branch: '001',
      account: '123123',
      account_type: 'poupança',
      bank_name: 'Bradesco',
      bank_code: '241',
      pix_key: 'bobjohnson@example.com',
      pix_key_type: 'email',
      status: 'validado',
      created_at: '2021-01-01',
      updated_at: '2021-01-01',
    };

    // Act
    receiverActions.addReceiver(newReceiver);

    // Assert
    expect(receiverStore.receivers).toContainEqual(newReceiver);
  });

  it('should remove an existing receiver from the list', () => {
    // Arrange
    const existingReceiver: Receiver = {
      id: '4',
      name: 'Alice Brown',
      email: 'alicebrown@example.com',
      tax_id: '789123456',
      branch: null,
      account: null,
      account_type: null,
      bank_name: null,
      bank_code: null,
      pix_key: 'alicebrown@example.com',
      pix_key_type: 'email',
      status: 'validado',
      created_at: '2021-01-01',
      updated_at: '2021-01-01',
    };
    receiverActions.addReceiver(existingReceiver);

    // Act
    receiverActions.removeReceiver(existingReceiver.id);

    // Assert
    expect(receiverStore.receivers).not.toContain(existingReceiver);
  });

  it('should load initial receivers with empty array', () => {
    // Arrange
    const initialReceivers: Receiver[] = [];

    // Act
    receiverActions.loadInitialReceivers(initialReceivers);

    // Assert
    expect(receiverStore.receivers).toEqual(initialReceivers);
  });
});
