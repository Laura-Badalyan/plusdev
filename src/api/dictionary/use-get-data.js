import { useQuery } from '@tanstack/react-query';
import { client } from '../client';

export const GET_DICTIONARY_ALL_OFFICES = '/api/dictionary/GetAllOffices';
export const GET_DICTIONARY_ROLES = '/api/dictionary/GetRoles';
export const GET_MSC_ADMIN_OFFICES = '/api/User/GetMscAdminOffices';


export const useGetData = (url, options = { enabled: true }) => {
    const result = useQuery([url], () => client.get(url), {
        ...options,
        select: (data) => data,
    });
    const { data, isSuccess } = result;
    return {
        ...result,
        data: isSuccess ? data.data : [],
    };
};
