import Image from 'next/image';
import { Line } from '../Line/Line';
import './ArticleCard';

export const SkeletonArticleCard = ({
    size = '',
}: {
    size?: 'large' | 'large-right' | '';
}) => {
    return (
        <div
            className={`article__block-skeleton animation-skeleton`}
            data-size={size}
        >
            <div className="article__logo-skeleton animation-skeleton"></div>
            <h4 className="header__h4 article__header-skeleton animation-skeleton"></h4>
            <div className="article__descr-skeleton animation-skeleton"></div>
            <div className="article__education__line animation-skeleton">
                <Line />
            </div>
            <div className="article__by">
                <div className="article__by_photo-skeleton animation-skeleton">
                    <Image
                        src={'/icons/profile.png'}
                        alt="photo"
                        height={48}
                        width={48}
                    />
                </div>
                <div className="article__by_name-skeleton animation-skeleton">
                    <div className="roboto-bold"></div>
                </div>
            </div>
        </div>
    );
};
