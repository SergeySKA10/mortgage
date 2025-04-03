import './SpeakerCard.scss';

export const SkeletonSpeakerCard = () => {
    return (
        <div className="getting__block-skeleton animation-skeleton">
            <div className="getting__promo">
                <div className="getting__promo_btn">
                    <div className="getting__promo_img-skeleton animation-skeleton"></div>
                    <button className="getting__promo_btn-skeleton animation-skeleton"></button>
                    <div className="getting__promo_descr-skeleton animation-skeleton"></div>
                </div>
            </div>

            <div className="getting__descr">
                <p className="getting__descr_subheader-skeleton animation-skeleton"></p>
                <h4 className="getting__descr_header-skeleton animation-skeleton"></h4>
                <p className="getting__descr_text-skeleton animation-skeleton"></p>
                <div className="getting__descr_block-skeleton animation-skeleton"></div>
                <div className="getting__line"></div>
                <div className="getting__descr_skills-skeleton animation-skeleton"></div>
            </div>
        </div>
    );
};
