import './VideoCard.scss';

export const VideoCardSkeleton = ({
    size = '',
}: {
    size?: 'videoLarge' | '';
}) => {
    return (
        <div className="story__presentation_elem-skeleton" data-size={size}>
            <div className="story__presentation_block-skeleton">
                <div className="story__wrapper">
                    <button className="story-btn-skeleton animation-skeleton" />
                    <p className="story__text-skeleton animation-skeleton"></p>
                    <div className="story__time-skeleton animation-skeleton"></div>
                </div>
            </div>
        </div>
    );
};
