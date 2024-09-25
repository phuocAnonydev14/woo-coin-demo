import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

// COOKIES

// TYPES
import { getCookie } from 'cookies-next';
import axiosRetry from 'axios-retry';
import { CacheRequestConfig, setupCache } from 'axios-cache-interceptor';
import {HttpMethodEnum} from "@/common/enum/app.enum";
import {Params} from "@/types/service.type";

class HttpService {
  private readonly http: AxiosInstance;
  private baseURL = process.env.NEXT_PUBLIC_BASE_URL || '';

  constructor(customBaseUrl?: string) {
    this.http = setupCache(
      axios.create({
        baseURL: customBaseUrl || this.baseURL,
        withCredentials: false,
        headers: this.setupHeaders(),
        timeout: 5000,
      }),
      {
        ttl: 1000 * 3, // 3s cache
      },
    );

    this.injectInterceptors();
  }

  // Get authorization token for requests
  private get getAuthorization() {
    const accessToken = getCookie("accessToken") || '';
    return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
  }

  // Initialize service configuration
  public service() {
    this.injectInterceptors();

    return this;
  }

  // Set up request headers
  private setupHeaders(hasAttachment = false, isPublicApi = false): AxiosRequestConfig['headers'] {
    const headers: AxiosRequestConfig['headers'] = {
      'Content-Type': hasAttachment ? 'multipart/form-data' : 'application/json',
    };

    if (!isPublicApi) {
      Object.assign(headers, this.getAuthorization);
    }

    return headers;
  }

  // Handle HTTP requests
  private async request<T>(
    method: HttpMethodEnum,
    url: string,
    options: AxiosRequestConfig | CacheRequestConfig,
  ): Promise<T | undefined> {
    // eslint-disable-next-line no-useless-catch
    try {
      const response: AxiosResponse<T> = await this.http.request<T>({
        method,
        url,
        ...options,
      });
      console.log("response", response)
      return response?.data;
    } catch (error) {
      // throw error
      this.normalizeError(error);
    }
  }

  // Perform GET request
  public async get<T>(url: string, params?: Params, isPublicApi = false): Promise<T | undefined> {
    return this.request<T>(HttpMethodEnum.GET, url, {
      params,
      headers: this.setupHeaders(false, isPublicApi),
      cache: {
        ttl: 1000 * 5,
        staleIfError: true, // use cache if there's an error
      },
    });
  }

  // Perform POST request
  public async post<T, P>(url: string, payload: P, params?: Params, isPublicApi = false): Promise<T | undefined> {
    return this.request<T>(HttpMethodEnum.POST, url, {
      params,
      data: payload,
      headers: this.setupHeaders(payload instanceof FormData, isPublicApi),
    });
  }

  // Perform UPDATE request
  public async update<T, P>(url: string, payload: P, params?: Params, isPublicApi = false): Promise<T | undefined> {
    return this.request<T>(HttpMethodEnum.PATCH, url, {
      params,
      data: payload,
      headers: this.setupHeaders(payload instanceof FormData, isPublicApi),
    });
  }

  // Perform DELETE request
  public async remove<T>(url: string, params?: Params, isPublicApi = false): Promise<T | undefined> {
    return this.request<T>(HttpMethodEnum.DELETE, url, {
      params,
      headers: this.setupHeaders(false, isPublicApi),
    });
  }

  // Inject interceptors for request and response
  private injectInterceptors() {
    // Set up request interceptor
    this.http.interceptors.request.use((request) => {
      // @TODO: implement an NProgress
      return request;
    });

    // Retry logic with axios-retry
    axiosRetry(this.http, {
      retries: 3,
      retryCondition: (error) => {
        return axiosRetry.isNetworkOrIdempotentRequestError(error) || error.code === 'ECONNABORTED';
      },
      retryDelay: (retryCount) => {
        console.log(`Retry attempt: ${retryCount}`);
        return retryCount * 1000; // delay 1S
      },
    });

    // Set up response interceptor
    this.http.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.code === 'ECONNABORTED') {
          console.error('Request timed out');
        }
        if (!error.response) return;
        const statusCode = error.response.status;
        if (statusCode === 401) {
          console.warn('Unauthorized. Redirecting to home page...');
          window.location.href = '/';
        }

        if (statusCode === 403) {
          console.warn('Forbidden access');
        }

        if (statusCode === 500) {
          console.error('Internal Server Error');
        }
        return this.normalizeError(error);
      },
    );
  }

  // Normalize errors
  private normalizeError(error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
}

export { HttpService as default };
