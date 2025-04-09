import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/app/lib/getQueryClient';
import { VideoInfo } from './VideoInfo';
import { VideoBlockSkeletont } from './VideoBlockSkeleton';
import { Suspense } from 'react';

import './VideoBlock.scss';

const VideoBlock = () => {
    const queryClient = getQueryClient();

    return (
        <Suspense key={'videoBlock'} fallback={<VideoBlockSkeletont />}>
            <div className="story__presentation">
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <VideoInfo />
                </HydrationBoundary>
            </div>
        </Suspense>
    );
};

export default VideoBlock;
