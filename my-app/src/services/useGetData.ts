import { useHttp } from '../hooks/http.hook';
import { useQuery } from '@tanstack/react-query';

const useGetData = (key: string) => {
    const _apiBase = `http://localhost:3000/`;
    const { request, process } = useHttp();
    const getData = useQuery({
        queryKey: [key],
        queryFn: () => request({ url: `${_apiBase}${key}` }),
    });

    return { process, getData };
};

export default useGetData;
