import { useMutation, useQueryClient } from '@tanstack/react-query';
import { noop } from '../../helpers/utils';

import { client } from '../client';
import { GET_USERS_LIST } from './use-get-users';

const url = '/api/User/DeleteUser?userId=:id';

export const useDeleteUser = (id, { onSuccess = noop, ...restOptions }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation((values) => client.post(url.replace(':id', id), values), {

    ...restOptions,
    onSuccess: () => {
      queryClient.invalidateQueries([GET_USERS_LIST]);
      onSuccess();
    },

  });
  return mutation;
};

