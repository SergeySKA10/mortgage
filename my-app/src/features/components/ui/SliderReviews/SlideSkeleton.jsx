import Image from 'next/image';
import { Line } from '../Line/Line';
import './SliderReviews.scss';

export const SliderSkeleton = () => {
    return (
        <>
            <SlideSkeleton />
            <SlideSkeleton />
            <SlideSkeleton />
            <SlideSkeleton />
            <SlideSkeleton />
            <SlideSkeleton />
            <SlideSkeleton />
            <SlideSkeleton />
            <SlideSkeleton />
            <SlideSkeleton />
        </>
    );
};

const SlideSkeleton = () => {
    return (
        <div className="customers__slide-skeleton">
            <div className="customers__slide-profile">
                <div className="customers__slide-photo animation-skeleton">
                    <Image
                        src={'/icons/profile.png'}
                        alt="photo"
                        height={110}
                        width={110}
                    />
                </div>
                <div className="customers__slide-info">
                    <div className="customers__slide-city-skeleton animation-skeleton"></div>
                    <div className="customers__slide-name-skeleton animation-skeleton"></div>
                    <div className="customers__slide-proff-skeleton animation-skeleton"></div>
                </div>
                <div className="customers__slide-social-skeleton animation-skeleton"></div>
            </div>
            <div className="customers__slide_line animation-skeleton">
                <Line />
            </div>
            <div className="customers__slide-descr">
                <div className="customers__slide-quote-skeleton animation-skeleton"></div>
                <p className="customers__slide-text-skeleton animation-skeleton"></p>
            </div>
        </div>
    );
};
