import { useQuery } from '@tanstack/react-query';
import { client } from '../client';

export const GET_ADMIN_APPLICATIONS = '/api/Admin/GetApplications';
export const GET_MSC_APPLICATIONS = '/api/Msc/GetApplications';
export const GET_VIEWER_APPLICATIONS = '/api/Viewer/GetApplications';
export const GET_MSC_VIEWER_APPLICATION = 'api/Observer/GetApplications';
export const GET_MSC_FILTERED_APPLICATIONS = '/api/Msc/GetFilteredApplicationsBySP';
export const GET_ADMIN_FILTERED_APPLICATIONS = '/api/Admin/GetFilteredApplicationsBySP';
export const GET_VIEWER_FILTERED_APPLICATIONS = '/api/Viewer/GetFilteredApplicationsBySP';
export const GET_MSC_VIEWER_FILTERED_APPLICATION = 'api/Observer/GetFilteredApplicationsBySP';

export const useGetApplications = (url, params, options = { enabled: true }) => {
    const result = useQuery({
        queryKey: [url, params],
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
