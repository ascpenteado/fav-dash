import { proxy, subscribe } from 'valtio';

export type Toast = {
  id: number;
  message: string;
  type: 'success' | 'error';
};

export type ToastState = {
  toasts: Toast[];
};

export const toastStore = proxy<ToastState>({
  toasts: [],
});

subscribe(toastStore, () => {
  console.log('Toast store updated:', toastStore.toasts);
});
