import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface IRecommendedProducts {
    product: string;
}

interface IProducts {
    isLoading: boolean;
    isFetched: boolean;
    isError: boolean;
    data: IRecommendedProducts | undefined;
}

// const accountId = '1';

const fetchProducts = async (userId: string): Promise<IRecommendedProducts> => {
    // const response = await axios.get(`localhost:8080/api/v1/offers/recommendations/${accountId}`);
    console.log(userId)
    const response = await axios.get(`http://localhost:8080/api/v1/offers`);
    return response.data;
      };


export const useFetchProducts = (shouldFetch: boolean, userId = '1'): IProducts => {
    const { data, isLoading, isError, isFetched } = useQuery({
        queryKey: ['products'],
        enabled: shouldFetch,
        queryFn: () => fetchProducts(userId),
    });

    return {
        data,
        isLoading,
        isFetched,
        isError,
    };
};
