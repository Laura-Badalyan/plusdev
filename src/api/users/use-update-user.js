import { useMutation, useQueryClient } from '@tanstack/react-query';
import { noop } from '../../helpers/utils';

import { client } from '../client';
import { GET_USERS_LIST } from './use-get-users';

export const useUpdateUser = (url, params, { onSuccess = noop, ...restOptions }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation((values) => client.post(url.replace(':id', params.id), values), {
    ...restOptions,
    onSuccess: () => {
      queryClient.invalidateQueries([GET_USERS_LIST]);
      onSuccess();
    },
  });
  return mutation;
};
