import axios, {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosError,
  Method,
  AxiosResponse,
} from 'axios';

type HttpHeaders = { [key: string]: string };

export class ApiClient {
  axios: AxiosInstance;

  constructor(baseURL: string, headers: HttpHeaders) {
    this.axios = axios.create({
      baseURL,
      timeout: 30000,
      headers,
    });
  }

  private async request<T>(
    method: Method,
    url: string,
    params?: Record<string, any>,
    data?: Record<string, any>,
    headers?: HttpHeaders,
  ): Promise<T> {
    const config: AxiosRequestConfig = {
      method,
      url,
      params,
      data,
      headers,
    };

    try {
      const resp = await this.axios.request<T>(config);
      return resp.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log((error as AxiosError).config.baseURL);
      }
      throw this.createApiError(error);
    }
  }

  public get<T>(
    endpoint: string,
    params?: Record<string, any>,
    headers?: HttpHeaders,
  ): Promise<T> {
    return this.request<T>('GET', endpoint, params, undefined, headers);
  }

  public post<T>(
    endpoint: string,
    data?: Record<string, any>,
    headers?: HttpHeaders,
  ): Promise<T> {
    return this.request<T>('POST', endpoint, undefined, data, headers);
  }

  public put<T>(
    endpoint: string,
    data?: Record<string, any>,
    headers?: HttpHeaders,
  ): Promise<T> {
    return this.request<T>('PUT', endpoint, undefined, data, headers);
  }

  private createApiError(error: any): Error {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      const { response } = axiosError;
      if (response) {
        const { status, data } = response;
        return new Error(
          `Request failed with status ${status}: ${JSON.stringify(data)}`,
        );
      } else {
        return new Error(`Request failed: ${axiosError.message}`);
      }
    } else {
      return new Error('An error occurred while making the API request');
      // Handle other types of errors if needed
    }
  }
}
