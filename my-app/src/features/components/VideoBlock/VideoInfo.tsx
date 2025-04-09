'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getOptions } from '../../../services/getOptions';
import { sortByDate } from '../../../utils/sortByDate';
import VideoCard from '../ui/VideoCard/VideoCard';
import { VideoDB } from '@/shared/shared-components/dataTypesFromSQL';

export const VideoInfo = () => {
    const { data } = useSuspenseQuery(getOptions('video'));

    return (
        <>
            {sortByDate(data, 'creation_time').map((el, i) => {
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
            })}
        </>
    );
};
