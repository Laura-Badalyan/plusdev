import { useQuery } from '@tanstack/react-query';
import { client } from '../client';

export const GET_USERS_LIST = '/api/User/GetUser/:id';

export const useGetUserData = (params = {}, options = { enabled: false }) => {
    const result = useQuery([GET_USERS_LIST, params], () => client.get(GET_USERS_LIST.replace(':id', params?.id)), {
        ...options,
        select: (data) => data.data,
    });
    const { data, isSuccess } = result;
    return {
        ...result,
        data: isSuccess ? data : {},
    };
};
