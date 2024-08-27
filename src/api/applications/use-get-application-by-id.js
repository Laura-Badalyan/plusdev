import { useQuery } from '@tanstack/react-query';
import { client } from '../client';

export const GET_ADMIN_APPLICATION_BY_ID = 'api/Admin/GetApplicationById';
export const GET_MSC_APPLICATION_BY_ID = 'api/Msc/GetApplicationById';
export const GET_VIEWER_APPLICATION_BY_ID = 'api/Viewer/GetApplicationById';
export const GET_MSC_VIEWER_APPLICATION_BY_ID = 'api/Observer/GetApplicationById';

export const useGetApplication = (url, params, options = { enabled: true }) => {
  const result = useQuery({
    queryKey: [url, params],
    queryFn: () => client.get(url, { params }),
    select: (data) => data.data,
    ...options,
  });
  const { data, isSuccess } = result;
  return {
    ...result,
    data: isSuccess ? data.data : [],
  };
};
