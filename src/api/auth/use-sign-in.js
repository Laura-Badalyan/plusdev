import { useMutation } from '@tanstack/react-query';

import { client } from '../client';

const url = '/api/Auth/LoginUser';

export const useSignIn = (options = {}) => {

  const mutation = useMutation(
    (values) => {
      return client.post(url, values);
    },
    options
  );
  return mutation;
};
