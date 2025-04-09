import { queryOptions } from '@tanstack/react-query';

type Key = 'video' | 'mentors' | 'ratings' | 'articles' | 'resources';

const fetchOptions = async (key: Key) => {
    const _apiBase = `http://localhost:3001/`;
    await new Promise((resolve) => setTimeout(resolve, 5000));
    try {
        const response = await fetch(`${_apiBase}${key}`);

        if (!response.ok) {
            throw new Error(`Could not fetch - status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`error message: ${error.message}`);
        } else {
            throw new Error(`error message: ${error}`);
        }
    }
};

export const getOptions = (key: Key) => {
    return queryOptions({
        queryKey: [key],
        queryFn: async () => fetchOptions(key),
    });
};
