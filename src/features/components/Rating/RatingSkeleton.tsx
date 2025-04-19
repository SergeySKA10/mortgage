import { SkeletonRatingCard } from '../ui/RatingCard/SkeletonRatingCard';
import './Rating.scss';

export const RatingSkeleton = () => {
    return (
        <div className="customers__rating">
            <SkeletonRatingCard />
            <SkeletonRatingCard />
        </div>
    );
};
