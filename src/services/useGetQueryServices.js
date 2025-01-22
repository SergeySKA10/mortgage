import { useHttp } from "../hooks/http.hook";
import { useQuery } from "@tanstack/react-query";

const useGetQueryServices = () => {
    const {request, process} = useHttp();

    // получение mentors из бд
    const getMentors = useQuery({
        queryKey: ['mentors'],
        queryFn: () => request({url: 'http://localhost:3001/mentors'})
    });

    // получение articles из бд
    const getArticles = useQuery({
        queryKey: ['article'],
        queryFn: () => request({url: 'http://localhost:3006/articles'})
    });

    // получение filters из бд
    const getFilters = useQuery({
        queryKey: ['filters'],
        queryFn: () => request({url: 'http://localhost:3005/filters'})
    });

     // получение rating из бд
     const getRating = useQuery({
        queryKey: ['rating'],
        queryFn: () => request({url: 'http://localhost:3003/ratings'})
    });

     // получение books из бд
     const getResources = useQuery({
        queryKey: ['books'],
        queryFn: () => request({url: 'http://localhost:3007/resources'})
    });

     // получение slidesReviews из бд
     const getSlides = useQuery({
        queryKey: ['slidesReviews'],
        queryFn: () => request({url: 'http://localhost:3004/slidesReviews'})
    });

     // получение video из бд
     const getVideo = useQuery({
        queryKey: ['video'],
        queryFn: () => request({url: 'http://localhost:3002/video'})
    });

    return {
        process,
        getMentors,
        getArticles,
        getFilters,
        getRating,
        getResources,
        getSlides,
        getVideo
    }
}

export default useGetQueryServices;