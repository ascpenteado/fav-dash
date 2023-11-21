import { proxy } from 'valtio';
import { Receiver } from '../../types/api.type';
import { devtools } from 'valtio/utils';

export type ReceiverState = {
  receivers: Receiver[];
};

export const receiverStore = proxy<ReceiverState>({
  receivers: [],
});

devtools(receiverStore, {
  name: 'receivers state',
  enabled: process.env.NODE_ENV === 'development',
});
