import { useMutation } from '@tanstack/react-query';

import { client } from '../client';
import { noop } from '../../helpers/utils';

const url = 'api/User/SsnVerification';

export const useSsnVerification = ({ onSuccess = noop, ...restOptions }) => {
    const mutation = useMutation((values) => client.post(url, values), {
        ...restOptions,
        onSuccess: (data, variables, context) => {
            onSuccess(data?.data, variables, context);
        },

    });
    return mutation;
};

