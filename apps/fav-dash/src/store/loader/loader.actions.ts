import { loaderStore } from './loader.state';

export const loaderActions = {
  setIsLoading: (isLoading: boolean) => {
    loaderStore.isLoading = isLoading;
  },
};
