import { useQuery } from '@tanstack/react-query';
import { client } from '../client';

export const useGetDecisionData = (url, params, options) => {
  const result = useQuery({
    queryKey: [url, params],
    queryFn: () => client.get(url, { params }),
    select: (data) => data.data,
    enabled: false,
    ...options,
  });

  const { data, isSuccess } = result;

  return {
    ...result,
    data: isSuccess ? data : null,
  };
};
