import { useQuery } from '@tanstack/react-query';
import { client } from '../client';

export const GET_RUN_CHECKS = '/api/Admin/RunChecks';
export const GET_APPLICATIONS_COUNT = '/api/Admin/GetApplicationsCount';
export const GET_RUN_APPROVE = '/api/Admin/Approve';
export const GET_MSC_DECISION_MAKING = '/api/Msc/DecisionMaking';
export const GET_MSC_VIEWER_DECISION_MAKING = '/api/Observer/DecisionMaking';

export const useDataForApplication = (url, params, options = { enabled: true }) => {
  const result = useQuery({
    queryKey: [url, params],
    queryFn: () => client.get(url, { params }),
    select: (data) => data.data,
    retry: false,
    ...options,
  });
  const { data, isSuccess } = result;
  return {
    ...result,
    data: isSuccess ? data.data : [],
  };
};
