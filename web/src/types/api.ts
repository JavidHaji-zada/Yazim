export interface RequestError {
  message: string;
  code: number;
}
export enum RequestStatus {
  IDLE = "idle",
  LOADING = "loading",
  SUCCESS = "success",
  FAILED = "failed",
}

export interface FetchStatus<T> {
  status: RequestStatus;
  data: T | null;
  error: RequestError | null;
}
