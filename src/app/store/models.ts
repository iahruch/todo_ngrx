export interface User {
  id?: number | string;
  name: string;
  year?: number | string;
  color?: string;
  pantone_value?: string;
 }

export interface  ErrorUser {
  headers?: object;
  status?: string | number;
  statusText?: string;
  url?: string;
  ok?: false;
  name?: string;
  message: string;
  error?: object
}
