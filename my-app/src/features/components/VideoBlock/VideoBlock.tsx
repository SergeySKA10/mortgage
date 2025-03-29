'use client';

import useGetData from '../../../services/useGetData';
import setContent from '../../../utils/setContent';

import type { VideoDB } from '@/shared/shared-components/dataTypesFromSQL';

import { sortByDate } from '../../../utils/sortByDate';

import VideoCard from '../ui/VideoCard/VideoCard';

import './VideoBlock.scss';

const VideoBlock = () => {
    // делаем запрос для получения данных
    const {
        process,
        getData: { data, isError, isPending },
    } = useGetData('video');

    return (
        <div className="story__presentation">
            {setContent({
                process,
                isError,
                isPending,
                data: sortByDate(data as VideoDB[], 'creation_time'),
                Component: VideoCard,
            })}
        </div>
    );
};

export default VideoBlock;
