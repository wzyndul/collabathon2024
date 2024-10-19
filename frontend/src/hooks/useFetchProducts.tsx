import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface IRecommendedProduct {
    id: number;
    offerType: string;
    title: string;
    description: string;
}

interface IProducts {
    isLoading: boolean;
    isFetched: boolean;
    isError: boolean;
    data: IRecommendedProduct[] | undefined;
}

const fetchProducts = async (accountId: number): Promise<IRecommendedProduct[]> => {
    console.log(accountId);
    const response = await axios.get(`http://localhost:8080/api/v1/offers/recommendations/${accountId}`);
    return response.data.response;
};

export const useFetchProducts = (shouldFetch: boolean, accountId: number): IProducts => {
    const { data, isLoading, isError, isFetched } = useQuery({
        queryKey: ['products', accountId],
        enabled: shouldFetch,
        queryFn: () => fetchProducts(accountId),
        staleTime: 5000,
    });

    return {
        data,
        isLoading,
        isFetched,
        isError,
    };
};
