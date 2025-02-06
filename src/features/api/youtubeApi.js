import { useHttp } from "../../hooks/http.hook";
import { useQuery } from "@tanstack/react-query";

export const useGetVideoDetailes = (url) => {
    const _apiBase = 'https://www.googleapis.com/youtube/v3/videos?'
    const _apiKey = process.env.REACT_APP_MY_API_KEY;
    const id = url.split('v=')[1];
    const {request} = useHttp();
    const getData = useQuery({
        queryKey: [`video:${id}`],
        queryFn: () => request({url: `${_apiBase}part=contentDetails&id=${id}&key=${_apiKey}`})
    });

   return getData;
}
