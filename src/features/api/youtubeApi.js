import { useHttp } from "../../hooks/http.hook";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

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


export const useGetDurationVideo  = (url) => {
    const [time, setTime] = useState('PT00M00S');

    const {data} = useGetVideoDetailes(url);

    useEffect(() => {
        if (data) {
            setTime(data.items[0].contentDetails.duration);
        }
    }, [data]);

    return time.slice(2, time.length - 1).replace(/\D/g, ':');
}