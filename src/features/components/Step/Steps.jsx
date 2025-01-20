import { useQuery } from '@tanstack/react-query';
import { useHttp } from '../../../hooks/http.hook';

import Spinner from '../ui/Spinner/Spinner';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';
import VideoCard from '../ui/VideoCard/VideoCard';

import './Steps.scss';
import './StepsMedia.scss';

const Steps = () => {
    const request = useHttp();

    // получаем данные из бд
    const {data, isPending, isError} = useQuery({
        queryKey: ['videoMain'],
        queryFn: () => request({url: 'http://localhost:3002/video'})
    });

    // формируем отображаемый контент
    const video = isError ? <ErrorMessage/>
                : isPending ? <Spinner/>
                : data.map(el => <VideoCard key={el.id} data={el}/>)

    return (
        <section className="steps">
            <div className="container">
                <div className="steps__wrapper">
                    {video}
                </div>
            </div>
        </section>
    )
}

export default Steps;