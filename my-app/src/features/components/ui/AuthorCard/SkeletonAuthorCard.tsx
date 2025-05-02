import Image from 'next/image';

export const SkeletonAuthorCard = () => {
    return (
        <div className="about_author__wrapper animation-skeleton">
            <div className="about_author__photo-skeleton">
                <Image
                    className="animation-skeleton"
                    src="/icons/profile.png"
                    width={184}
                    height={173}
                    alt="mentors"
                />
            </div>
            <div className="about_author__descr">
                <div className="about_author__subheader-skeleton animation-skeleton"></div>
                <div className="about_author__name-skeleton animation-skeleton"></div>
                <div className="about_author__info-skeleton animation-skeleton"></div>
                <div className="about_author__btn">
                    <button className="about_author__btn-skeleton animation-skeleton" />
                    <div className="about_author__meet-skeleton animation-skeleton"></div>
                </div>
            </div>
        </div>
    );
};
