import { Receiver } from '../../types/api.type';
import { receiverStore } from './receivers.state';

export const receiverActions = {
  loadInitialReceivers: (initialReceivers: Receiver[]) => {
    receiverStore.receivers = [...initialReceivers];
  },

  addReceiver: (newReceiver: Receiver) => {
    receiverStore.receivers.push(newReceiver);
  },

  removeReceiver: (id: string) => {
    receiverStore.receivers = receiverStore.receivers.filter(
      (receiver) => receiver.id !== id,
    );
  },

  updateReceiver: (id: string, updatedReceiver: Receiver) => {
    receiverStore.receivers = receiverStore.receivers.map((receiver) =>
      receiver.id === id ? { ...receiver, ...updatedReceiver } : receiver,
    );
  },
};
