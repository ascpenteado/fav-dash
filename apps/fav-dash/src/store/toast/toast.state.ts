import { proxy } from 'valtio';

export type Toast = {
  id: string;
  message: string;
  type: 'success' | 'error';
};

export type ToastState = {
  toasts: Toast[];
};

export const toastStore = proxy<ToastState>({
  toasts: [],
});
