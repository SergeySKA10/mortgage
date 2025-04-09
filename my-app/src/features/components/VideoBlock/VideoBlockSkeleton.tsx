import { VideoCardSkeleton } from '../ui/VideoCard/VideoCardSkeleton';
import './VideoBlock.scss';

export const VideoBlockSkeletont = () => {
    return (
        <div className="story__presentation">
            <VideoCardSkeleton size="videoLarge" />
            <VideoCardSkeleton />
            <VideoCardSkeleton />
        </div>
    );
};
