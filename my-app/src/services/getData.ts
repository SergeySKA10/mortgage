// import { QueryClient } from '@tanstack/react-query';

// type GetData = (url: string) => Promise<any>;

// const getData: GetData = async (url: string) => {
//     try {
//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(
//                 `Could not fetch ${url}, status: ${response.status}`
//             );
//         }

//         return await response.json();
//     } catch (error) {
//         if (error instanceof Error) {
//             throw new Error(`error message: ${error.message}`);
//         } else {
//             console.error(error);
//         }
//     }
// };

// export const FetchData = async (key: string) => {
//     const queryClient = new QueryClient();

//     const _apiBase = `http://localhost:3001/`;
//     await queryClient.prefetchQuery({
//         queryKey: [key],
//         queryFn: () => getData(`${_apiBase}${key}`),
//     });
// };
