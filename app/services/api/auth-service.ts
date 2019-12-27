import AuthRequest from 'models/request/auth-request';
import { RestResult } from 'models/response/rest-result';
import { AuthResponse } from 'models/response/auth-response';
import { axiosConfig } from './axios';
import axios, { AxiosResponse } from 'axios';

const baseUrl = process.env.AUTH_API;
const instance = axios.create({
  baseURL: process.env.AUTH_API,
});

export async function signIn(request: AuthRequest): Promise<AuthResponse> {
  const body = request;
  return instance
    .post('/auth', body, axiosConfig(dummyResponse, 1000, true))
    .then((resp: AxiosResponse<RestResult<AuthResponse>>) => {
      const result = resp.data.data;
      return result;
    });
}

const mockResponse = (): RestResult<AuthResponse> => ({
  status: 'success',
  message: 'Login success',
  data: {
      access_token: '3982rh923yhrf9823f82hf2i',
      token_type: 'bearer',
      refresh_token: '9328uthjiu2hf9832u9f82333',
      scope: 'ALL',
  },
});

const dummyResponse = (): AxiosResponse<RestResult<AuthResponse>> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};
