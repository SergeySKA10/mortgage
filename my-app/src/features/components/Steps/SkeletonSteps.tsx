import { VideoCardSkeleton } from '../ui/VideoCard/VideoCardSkeleton';
import './Steps.scss';
import './StepsMedia.scss';

export const SkeletonSteps = () => {
    return (
        <>
            <VideoCardSkeleton />
            <VideoCardSkeleton />
            <VideoCardSkeleton />
            <VideoCardSkeleton />
            <VideoCardSkeleton />
            <VideoCardSkeleton />
        </>
    );
};
