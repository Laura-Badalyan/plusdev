import { useQuery } from '@tanstack/react-query';
import { client } from '../client';
import { USERS } from 'helpers/constants';
import { useAuth } from 'context/auth-context';

const handleFile = async (data, fileName) => {
  try {
    const url = window.URL.createObjectURL(new Blob([data]));

    let fileExt = 'unknown';
    switch (data.type) {
      case 'image/jpeg':
        fileExt = 'jpg';
        break;
      case 'image/png':
        fileExt = 'png';
        break;
      case 'application/pdf':
        fileExt = 'pdf';
        break;
      default:
      // Do nothing, use the default file extension
    }

    const downloadFileName = fileName ? `${fileName}.${fileExt}` : `file.${fileExt}`;

    //Open the file in new tab
    const fileBlob = new Blob([data], { type: data.type });
    fileBlob.lastModifiedDate = new Date();
    fileBlob.name = downloadFileName;
    const fileUrl = URL.createObjectURL(fileBlob);
    // Open the file in a new tab or window
    window.open(fileUrl, '_blank');

    window.URL.revokeObjectURL(url);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export const useGetFile = (params, { onSuccess, ...options } = { enabled: true }) => {
  const { user } = useAuth();
  const isAdminorViewer = user.userType === USERS.VIEWER ? 'Viewer' : 'Admin'
  const result = useQuery({
    queryKey: [`/api/${isAdminorViewer}/GetFileByChecksum`, params],
    queryFn: () => client.get(`/api/${isAdminorViewer}/GetFileByChecksum`, { params, responseType: 'blob' }),
    select: (data) => data.data,
    onSuccess: (data) => {
      handleFile(data);
      onSuccess(data);
    },
    ...options,
  });
  const { data, isSuccess } = result;
  return {
    ...result,
    data: isSuccess ? data.data : [],
  };
};
