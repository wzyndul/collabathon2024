import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


interface IFetchAIResponse {
    isLoading: boolean;
    isFetched: boolean;
    isError: boolean;
    data: string | undefined;
}

const fetchAIResponse = async (prompt: string): Promise<string> => {
    const response = await axios.post(`/api/v1/chatbot/send-message`, { prompt });
    return response.data;
};

export const useFetchAIResponse = (prompt: string, shouldFetch = true): IFetchAIResponse => {
    const { data, isLoading, isError, isFetched } = useQuery({
        queryKey: ['aiResponse', prompt],
        enabled: shouldFetch,
        queryFn: () => fetchAIResponse(prompt),
    });

    return {
        data,
        isLoading,
        isFetched,
        isError,
    };
};
