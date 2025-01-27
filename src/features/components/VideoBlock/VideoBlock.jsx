import useGetData from '../../../services/useGetData';
import setContent from '../../../utils/setContent';

import { useState, useEffect } from 'react';

import { sortByDate } from '../../../utils/sortByDate';

import VideoCard from '../ui/VideoCard/VideoCard';

import './VideoBlock.scss';

const VideoBlock = () => {
    // делаем запрос для получения данных
    const {process, getData: {data, isError, isPending}} = useGetData('video', 2);

    // создаем изначальное состояние для видео блоков
    const [videos, setVideos] = useState([]);

    // добавляем в блоки полученные данные
    useEffect(() => {
        if(data) {
            const sortData = sortByDate(data);
            setVideos(videos => sortData.map((el, i) => {
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
            }))
        }
    }, [data])

    return (
        <div className="story__presentation">
            {setContent({process, isError, isPending, Components: videos})}
        </div>
    )
}



export default VideoBlock;