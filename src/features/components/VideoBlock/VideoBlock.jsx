import { useQuery } from '@tanstack/react-query';
import { useHttp } from '../../../hooks/http.hook';

import Spinner from '../ui/Spinner/Spinner';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';
import VideoCard from '../ui/VideoCard/VideoCard';

import './VideoBlock.scss';

const VideoBlock = () => {
    const request = useHttp();
    // получаем видео из store для формирования блока с видео
    const {data, isError, isPending} = useQuery({
        queryKey: ['videoMain'],
        queryFn: () => request({url: 'http://localhost:3001/videoBlocks'})
    })

    // формируем блок с видео
    const videoBlock = isError ? <ErrorMessage/>
                    : isPending ? <Spinner/>
                    : data.map((el, i) => {
                        // ограничиваем для отображения только 3-х видео
                        if (i < 3) {
                            // созаем переменную для обозначения большого блока и передачи в props
                            const size = i === 1 ? 'videoLarge' : '';
                            return (
                                <VideoCard key={el.id} data={el} size={size}/>
                            )
                        } else {
                            return null;
                        }
                    });

    return (
        <div className="story__presentation">
            {videoBlock}
        </div>
    )
}



export default VideoBlock;