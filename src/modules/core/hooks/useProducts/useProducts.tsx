import { useMemo } from 'react';
import { useQuery } from 'react-query';

import { AxiosResponse } from 'axios';
import { useSession } from 'next-auth/react';

import { ApiRoutes } from '../../constants/ApiRoutes';
import DefaultResponse from '../../interfaces/defaultResponse.interface';
import ProductInterface from '../../interfaces/product.interface';
import useAxios from '../useAxios/useAxios';

const useProducts = () => {
  const axios = useAxios();
  const { data: session } = useSession();
  const companyId = process.env.NEXT_PUBLIC_COMPANY_ID || '';
  const getProducts = useQuery<
    AxiosResponse<DefaultResponse<ProductInterface>>
  >(
    [ApiRoutes.PRODUCTS.replace(':companyId', companyId), session],
    () => {
      return axios.get(ApiRoutes.PRODUCTS.replace(':companyId', companyId));
    },
    { refetchOnWindowFocus: false }
  );

  return useMemo(() => {
    return getProducts;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getProducts, session]);
};

export default useProducts;
