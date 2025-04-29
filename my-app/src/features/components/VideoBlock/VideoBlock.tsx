import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/app/lib/getQueryClient';
import { VideoInfo } from './VideoInfo';
import { VideoBlockSkeleton } from './VideoBlockSkeleton';
import { Suspense } from 'react';

import './VideoBlock.scss';

const VideoBlock = () => {
    const queryClient = getQueryClient();

    return (
        <Suspense key={'videoBlock'} fallback={<VideoBlockSkeleton />}>
            <div tabIndex={0} className="story__presentation">
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <VideoInfo />
                </HydrationBoundary>
            </div>
        </Suspense>
    );
};

export default VideoBlock;
