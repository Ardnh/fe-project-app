export interface APIResponse {
  code: number;
  message: string;
  processTime: number;
}

export interface APIResponseWithData<T> {
  code: number;
  message: string;
  data: T;
  processTime: number;
}
