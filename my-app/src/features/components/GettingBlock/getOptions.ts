import { queryOptions } from '@tanstack/react-query';

export const getOptions = (key: string) => {
    return queryOptions({
        queryKey: [key],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3001/${key}`);

            return response.json();
        },
    });
};
