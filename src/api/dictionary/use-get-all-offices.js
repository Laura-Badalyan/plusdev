import { useQuery } from '@tanstack/react-query';
import { client } from '../client';

export const GET_DICTIONARY_ALL_OFFICES = '/api/dictionary/GetAllOffices';

export const useGetAllOffices = (options = { enabled: true }) => {
    const result = useQuery([GET_DICTIONARY_ALL_OFFICES], () => client.get(GET_DICTIONARY_ALL_OFFICES), {
        ...options,
        select: (data) => data,
    });
    const { data, isSuccess } = result;
    return {
        ...result,
        data: isSuccess ? data.data : [],
    };
};
