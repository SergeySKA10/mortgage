export const SkeletonPromoWebinar = () => {
    return (
        <>
            <div className="promo_webinar__wrapper-skeleton">
                <div className="promo_webinar__info">
                    <h1 className="header__h1 promo_webinar__info-header-skeleton animation-skeleton"></h1>
                    <div className="promo_webinar__author-skeleton animation-skeleton"></div>
                    <div className="promo_webinar__descr-skeleton animation-skeleton"></div>
                    <div className="form-skeleton" />
                </div>
                <div className="promo_webinar__macbook">
                    <div className="promo_webinar__img-skeleton animation-skeleton" />
                    <div className="promo_webinar__macbook-play">
                        <button className="promo_webinar__macbook-play-skeleton animation-skeleton" />
                        <div className="promo_webinar__time-skeleton animation-skeleton"></div>
                    </div>
                </div>
            </div>
        </>
    );
};
