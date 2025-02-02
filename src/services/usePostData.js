import { useHttp } from "../hooks/http.hook";
import { useMutation } from "@tanstack/react-query";

const usePostData = (key) => {
    const _apiBase = 'http://localhost:3008/';
    const {request} = useHttp();

    const postData = useMutation({
        mutationFn: (body) => request({
            url: `${_apiBase}${key}`,
            method: 'POST',
            body: body,
        }),
        onSuccess: (data) => {
          console.log(data);
        }
      });

    return postData;
}

export default usePostData;