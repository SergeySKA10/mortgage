import { useHttp } from '../hooks/http.hook';
import { useMutation } from '@tanstack/react-query';
import { Key } from '@/services/getOptions';

export type Method = 'DELETE' | 'POST' | 'PUT';

const useDeletetData = (key: Key, method: Method) => {
    const _apiBase = 'http://localhost:3001/';
    const { request } = useHttp();

    const deleteData = useMutation({
        mutationFn: (id: string) =>
            request({
                url: `${_apiBase}${key}/${id}`,
                method: method,
            }),
        onSuccess: (data) => {
            console.log(data);
        },
    });

    return deleteData;
};

export default useDeletetData;
