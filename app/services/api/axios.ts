import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { OAUTH_TOKEN, get, set } from '../local-storage-service';

const baseURL = process.env.API_BASE_URL as string;
const isDummy = baseURL === undefined;

export const axiosConfigWithAuthToken = (): AxiosRequestConfig => {
  const options = {
    headers: {
      'Authorization': `bearer ${get(OAUTH_TOKEN)}`,
      'Content-Type': 'application/json',
    },
  };
  return { headers: options.headers };
};

export const axiosConfig = (
  dummyResponse?: () => AxiosResponse,
  sleep?: number,
  forceMock?: boolean | string,
  config: AxiosRequestConfig = axios.defaults,
) => {
  if ((forceMock === undefined || forceMock) && dummyResponse) {
    const { adapter, ...rest } = config;
    const finalConfig: AxiosRequestConfig = {
      ...rest,
      adapter: customAdapter(dummyResponse, sleep),
    };
    return finalConfig;
  }
  return config;
};

function customAdapter(dummyResponse: () => AxiosResponse, sleep?: number) {
  return config => {
    return new Promise<AxiosResponse>((resolve, reject) => {
      if (sleep) {
        delay(sleep).then(() => {
          resolve(dummyResponse());
        });
      } else {
        resolve(dummyResponse());
      }
    });
  };
}
const delay = (t: number) => new Promise(resolve => setTimeout(resolve, t));
