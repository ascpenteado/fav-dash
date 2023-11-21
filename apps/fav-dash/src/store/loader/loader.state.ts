import { proxy } from 'valtio';
import { devtools } from 'valtio/utils';

export type LoaderState = {
  isLoading: boolean;
};

export const loaderStore = proxy<LoaderState>({
  isLoading: false,
});

devtools(loaderStore, {
  name: 'loader state',
  enabled: process.env.NODE_ENV === 'development',
});
