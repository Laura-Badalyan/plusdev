import { useMutation } from '@tanstack/react-query';
import { client } from '../client';
export const URL_ADMIN_EXPORT_CSV = 'api/Admin/ExportCsv'
export const URL_MSC_EXPORT_CSV = 'api/Msc/ExportCsv'

export const useSaveApplication = (url, options) => {
  const mutation = useMutation({
    mutationFn: (values) => {
      return client.post(url, values);
    },
    ...options,
  });
  return mutation;
};
