'use client';

import useGetData from '../../../services/useGetData';
import { useState, useEffect, JSX } from 'react';

import type { VideoDB } from '@/shared/shared-components/dataTypesFromSQL';
import { sortByDate } from '../../../utils/sortByDate';
import VideoCard from '../ui/VideoCard/VideoCard';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';

import './VideoBlock.scss';

const VideoBlock = () => {
    // делаем запрос для получения данных
    const {
        getData: { data, isError, isPending },
    } = useGetData('video');

    // создаем изначальное состояние для видео блоков
    const [videos, setVideos] = useState<(JSX.Element | undefined)[]>([]);

    // добавляем в блоки полученные данные
    useEffect(() => {
        if (data) {
            const sortData = sortByDate(data as VideoDB[], 'creation_time');

            setVideos(() =>
                (sortData as VideoDB[]).map((el, i) => {
                    // ограничиваем для отображения только 3-х видео
                    if (i < 3) {
                        // созаем переменную для обозначения большого блока и передачи в props
                        const size = i === 1 ? 'videoLarge' : '';
                        return (
                            <VideoCard
                                key={el.id}
                                data={el as VideoDB}
                                size={size}
                            />
                        );
                    }
                })
            );
        }
    }, [data]);

    return (
        <div className="story__presentation">
            {isError ? (
                <ErrorMessage />
            ) : isPending ? (
                <div>Loading...</div>
            ) : (
                videos
            )}
        </div>
    );
};

export default VideoBlock;
