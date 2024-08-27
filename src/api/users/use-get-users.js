import { useQuery } from '@tanstack/react-query';
import { client } from '../client';

export const GET_USERS_LIST = '/api/User/GetUsers';
export const GET_MSC_USERS_LIST = '/api/User/GetMscUsers';

export const useGetUsers = (url, params, options = { enabled: true }) => {
    const result = useQuery({
        queryKey: [GET_USERS_LIST, params],
        queryFn: () => client.get(url, { params }),
        ...options,
        select: (data) => data.data,
    });

    const { data, isSuccess } = result;
    return {
        ...result,
        data: isSuccess ? data.data : [],
    };
};
