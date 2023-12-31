import { Toast, toastStore } from './toast.state';

export const toastActions = {
  addToast: (toast: Toast) => {
    toastStore.toasts.push(toast);
  },

  removeToast: (id: string) => {
    toastStore.toasts = toastStore.toasts.filter((toast) => toast.id !== id);
  },

  clearToasts: () => {
    toastStore.toasts = [];
  },
};
