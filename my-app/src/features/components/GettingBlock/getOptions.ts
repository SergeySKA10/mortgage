import { queryOptions } from '@tanstack/react-query';

export const getOptions = (key: string) => {
    return queryOptions({
        queryKey: [key],
        queryFn: async () => {
            // await new Promise((resolve) => setTimeout(resolve, 5000));
            const response = await fetch(`http://localhost:3001/${key}`);

            return response.json();
        },
    });
};
