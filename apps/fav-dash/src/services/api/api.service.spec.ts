import { ApiClient } from './api.service';
import { spyOn } from '@vitest/spy';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('API Service - Get', () => {
  it('should create an instance of ApiClient with a baseURL and headers', () => {
    // Arrange
    const baseURL = BASE_URL;
    const headers = { 'Content-Type': 'application/json' };

    // Act
    const apiClient = new ApiClient(baseURL, headers);

    // Assert
    expect(apiClient).toBeInstanceOf(ApiClient);
    expect(apiClient.axios.defaults.baseURL).toBe(baseURL);
    expect(apiClient.axios.defaults.headers).toContain(headers);
  });

  // // ApiClient can make a GET request with endpoint and optional params and headers
  it('should return successful response from GET request', async () => {
    const apiClient = new ApiClient(BASE_URL, {});
    const mockData = { id: 1, title: 'My Post' };
    const mockResponse = { data: mockData };

    spyOn(apiClient, 'get').mockResolvedValue(mockResponse);

    const result = await apiClient.get('/posts/1');
    expect(result).toEqual(mockResponse);
  });

  it('should handle error response from GET request', async () => {
    const apiClient = new ApiClient(BASE_URL, {});
    const mockError = { message: 'Network Error' };

    spyOn(apiClient.axios, 'get').mockRejectedValue(mockError);

    try {
      await apiClient.get('/posts/1');
    } catch (error) {
      expect(error.message).toEqual('Request failed: Network Error');
    }
  });
});

describe('API Service - Post', () => {
  it('should return successful response from POST request', async () => {
    const apiClient = new ApiClient(BASE_URL, {});
    const mockData = { id: 101, title: 'My New Post' };
    const mockResponse = { data: mockData };

    spyOn(apiClient.axios, 'post').mockResolvedValue(mockResponse);

    const result = await apiClient.post('/posts', mockData);
    expect(result).toEqual(mockData);
  });

  it('should handle error response from POST request', async () => {
    const apiClient = new ApiClient(BASE_URL, {});
    const mockError = { message: 'Validation Error' };

    spyOn(apiClient.axios, 'post').mockRejectedValue(mockError);

    try {
      await apiClient.post('/posts', { title: '' });
    } catch (error) {
      expect(error.message).toEqual('Request failed: Validation Error');
    }
  });
});

describe('API Service - Put', () => {
  it('should return successful response from PUT request', async () => {
    const apiClient = new ApiClient(BASE_URL, {});
    const mockData = { id: 1, title: 'Updated Post' };
    const mockResponse = { data: mockData };

    spyOn(apiClient.axios, 'put').mockResolvedValue(mockResponse);

    const result = await apiClient.put(`/posts/1`, mockData);
    expect(result).toEqual(mockData);
  });

  it('should handle error response from PUT request', async () => {
    const apiClient = new ApiClient(BASE_URL, {});
    const mockError = { message: 'Resource Not Found' };

    spyOn(apiClient.axios, 'put').mockRejectedValue(mockError);

    try {
      await apiClient.put(`/posts/1`, { title: 'Updated Post' });
    } catch (error) {
      expect(error.message).toEqual('Request failed: Resource Not Found');
    }
  });
});

describe('API Service - Delete', () => {
  it('should return successful response from DELETE request', async () => {
    const apiClient = new ApiClient(BASE_URL, {});
    const mockResponse = { data: {} };

    spyOn(apiClient.axios, 'delete').mockResolvedValue(mockResponse);

    const result = await apiClient.delete('/posts/1');
    expect(result).toEqual({});
  });

  it('should handle error response from DELETE request', async () => {
    const apiClient = new ApiClient(BASE_URL, {});
    const mockError = { message: 'Unauthorized Access' };

    spyOn(apiClient.axios, 'delete').mockRejectedValue(mockError);

    try {
      await apiClient.delete('/posts/1');
    } catch (error) {
      expect(error.message).toEqual('Request failed: Unauthorized Access');
    }
  });
});
