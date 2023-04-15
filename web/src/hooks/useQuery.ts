import { useEffect, useState } from "react";
import { FetchStatus, RequestStatus, RequestError } from "@types";

export function useQuery<T>(fn: () => Promise<T>): FetchStatus<T> {
  const [status, setStatus] = useState(RequestStatus.IDLE);
  const [error, setError] = useState<RequestError | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setStatus(RequestStatus.LOADING);
      const newData = await fn();
      setData(newData);
      setStatus(RequestStatus.SUCCESS);
    } catch (error: unknown) {
      setStatus(RequestStatus.FAILED);
      setError(error as RequestError);
    } finally {
      setTimeout(() => {
        setStatus(RequestStatus.IDLE);
        setError(null);
      }, 1500);
    }
  };

  return { status, error, data };
}
