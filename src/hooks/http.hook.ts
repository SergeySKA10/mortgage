import { useState } from 'react';
import { IRequestConfig } from '@/shared/shared-hooks/requestConfig';

export const useHttp = () => {
    const [process, setProcess] = useState<'waiting' | 'render'>('waiting');

    const request = async (meta: IRequestConfig) => {
        const {
            url,
            method = 'GET',
            body = null,
            headers = { 'Content-Type': 'application/json' },
            format = 'json',
        } = meta;
        setProcess('render');
        await new Promise((resolve) => setTimeout(resolve, 5000));
        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                throw new Error(
                    `Could not fetch ${url}, status: ${response.status}`
                );
            }

            let data;

            switch (format) {
                case 'json':
                    data = await response.json();
                    break;
                case 'blob':
                    data = await response.blob();
                    break;
                default:
                    throw new Error('Invalid format specified for request');
            }

            return data;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`error message: ${error.message}`);
            } else {
                console.error(error);
            }
        }
    };

    return { request, process };
};
