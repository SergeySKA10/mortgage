import { useHttp } from '../hooks/http.hook';
import { useMutation } from '@tanstack/react-query';

type Key = 'book' | 'webinar' | 'articles';

const usePostData = (key: Key) => {
    const _apiBase = 'http://localhost:3001/';
    const { request } = useHttp();

    const postData = useMutation({
        mutationFn: (body: string) =>
            request({
                url: `${_apiBase}${key}`,
                method: 'POST',
                body: body,
            }),
        onSuccess: (data) => {
            console.log(data);
        },
    });

    return postData;
};

export default usePostData;
