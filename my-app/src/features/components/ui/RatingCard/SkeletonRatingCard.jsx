import { Line } from '../Line/Line';
import './RatingCard.scss';

export const SkeletonRatingCard = () => {
    return (
        <div className="customers__block-skeleton">
            <div className="customers__block-descr">
                <div className="customers__block_text-skeleton animation-skeleton"></div>
                <div className="customers__block_img-skeleton animation-skeleton"></div>
                <div className="customers__block_line animation-skeleton">
                    <Line />
                </div>
                <div className="customers__block_reviews-skeleton animation-skeleton">
                    <p></p>
                </div>
            </div>
            <div className="line__vertical-mini animation-skeleton"></div>
            <div className="customers__block-stars animation-skeleton">
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
};
