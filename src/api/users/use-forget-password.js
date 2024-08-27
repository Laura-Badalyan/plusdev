import { useMutation } from '@tanstack/react-query';

import { client } from '../client';

const url = '/api/User/ForgetPassword';

export const useForgetPassword = (options = {}) => {
    const mutation = useMutation((user) => {
        return client.post(url, user);
    }, options);
    return mutation;
};

