import { useMutation } from '@tanstack/react-query';

import { client } from '../client';

const url = '/api/User/RecoverPassword';

export const useRecoverPassword = (options = {}) => {
    const mutation = useMutation((user) => {
        return client.post(url, user);
    }, options);
    return mutation;
};

