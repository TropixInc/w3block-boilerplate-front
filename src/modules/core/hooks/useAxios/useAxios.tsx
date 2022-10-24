import { useMemo } from 'react';

import { AxiosRequestConfig } from 'axios';
import { useSession } from 'next-auth/react';

import { createAxiosInstance } from '../../config/api';

const useAxios = () => {
  const { data: session } = useSession();

  const axios = useMemo(() => {
    const axiosInstance = createAxiosInstance();
    if (session?.accessToken) {
      axiosInstance.interceptors.request.use(
        (axiosRequest: AxiosRequestConfig) => {
          const headers = axiosRequest.headers ?? {};
          axiosRequest.headers = {
            ...headers,
            authorization: `Bearer ${session.accessToken}`,
          };
          return axiosRequest;
        }
      );
    }
    return axiosInstance;
  }, [session]);
  return axios;
};

export default useAxios;
