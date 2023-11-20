import { proxy } from 'valtio';

export type LoaderState = {
  isLoading: boolean;
};

export const loaderStore = proxy<LoaderState>({
  isLoading: false,
});
