'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getOptions } from '@/services/getOptions';
import setContent from '@/utils/setContent';
import VideoCard from '../ui/VideoCard/VideoCard';
import { ErrorServerMessage } from '../ui/ErrorMessage/ErrorServerMessage';

export const StepsInfo = () => {
    const { data } = useSuspenseQuery(getOptions('video'));

    if (data.isError) {
        return (
            <>
                <ErrorServerMessage message={data.message} id={'video'} />
            </>
        );
    }

    return (
        <>
            {setContent({
                data: data,
                Component: VideoCard,
                sorted: 'creation_time',
            })}
        </>
    );
};
