import { useQuery } from '@tanstack/react-query';
import { client } from '../client';

export const GET_DICTIONARY_ROLES = '/api/dictionary/GetRoles';

export const useGetRoles = (options = { enabled: true }) => {
  const result = useQuery([GET_DICTIONARY_ROLES], () => client.get(GET_DICTIONARY_ROLES), {
    ...options,
    select: (data) => data,
  });
  const { data, isSuccess } = result;
  return {
    ...result,
    data: isSuccess ? data.data : [],
  };
};
