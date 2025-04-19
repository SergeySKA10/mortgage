import { useHttp } from '../hooks/http.hook';
import { useQuery } from '@tanstack/react-query';
import { GetData } from '@/shared/shared-services/shared-getData';

const useGetData: GetData = (key: string) => {
    const _apiBase = `http://localhost:3001/`;
    const { request, process } = useHttp();
    const getData = useQuery({
        queryKey: [key],
        queryFn: () => request({ url: `${_apiBase}${key}` }),
    });

    return { process, getData };
};

export default useGetData;
