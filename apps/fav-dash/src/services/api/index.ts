// api.ts

import { ApiClient } from './api.service';

const apiBaseUrl = 'http://localhost:5000/';
const apiHeaders = {
  'Content-Type': 'application/json',
};

export const api = new ApiClient(apiBaseUrl, apiHeaders);
