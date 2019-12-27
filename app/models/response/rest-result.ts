export interface RestResult<T> {
  data: T;
  message: string;
  status: string;
}
