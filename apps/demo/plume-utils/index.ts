export const noop = () => { }

export type Handler = () => void;

export interface Response {
  success: boolean;
  data?: Array<any>;
}