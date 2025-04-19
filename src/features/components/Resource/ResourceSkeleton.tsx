import { SkeletonBookCard } from '../ui/BookCard/SkeletonBookCard';
import './Resource.scss';

export const ResourceSkeleton = () => {
    return (
        <>
            <SkeletonBookCard type={'download'} />
            <SkeletonBookCard type={'video'} />
        </>
    );
};
