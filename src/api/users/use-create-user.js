import { useMutation, useQueryClient } from '@tanstack/react-query';
import { noop } from '../../helpers/utils';

import { client } from '../client';
import { GET_USERS_LIST } from './use-get-users';

export const useCreateUser = (url, { onSuccess = noop, ...restOptions }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (values) => {
      return client.post(url, values);
    },
    {
      ...restOptions,
      onSuccess: () => {
        queryClient.invalidateQueries([GET_USERS_LIST]);
        onSuccess();
      },
    }
  );
  return mutation;
};

