import { useHttp } from "../hooks/http.hook";
import { useQuery } from "@tanstack/react-query";

const useGetData = (key, num) => {
    const _apiBase = `http://localhost:300`;
    const {request, process} = useHttp();
    const getData = useQuery({
        queryKey: [key],
        queryFn: () => request({url: `${_apiBase}${num}/${key}`})
    });

    return {process, getData}
}

export default useGetData;