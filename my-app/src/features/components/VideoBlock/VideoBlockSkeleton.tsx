import { VideoCardSkeleton } from '../ui/VideoCard/VideoCardSkeleton';
import './VideoBlock.scss';

export const VideoBlockSkeleton = () => {
    return (
        <div className="story__presentation">
            <VideoCardSkeleton size="videoLarge" />
            <VideoCardSkeleton />
            <VideoCardSkeleton />
        </div>
    );
};
