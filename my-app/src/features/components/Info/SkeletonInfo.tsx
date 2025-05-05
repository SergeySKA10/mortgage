import './Info.scss';
import './InfoMedia.scss';

export const SkeletonInfo = () => {
    return (
        <>
            <div className="info__block">
                <h2 className="header__h2-left roboto-bold">
                    What`s in the report
                </h2>
                <div className="info__descr-skeleton animation-skeleton"></div>
            </div>
            <div className="info__block">
                <h4 className="header__h4 roboto-bold">1st thing</h4>
                <div className="info__block_descr-skeleton animation-skeleton"></div>
                <div className="info__block_img-skeleton animation-skeleton"></div>
            </div>
            <div className="info__block">
                <h4 className="header__h4 roboto-bold">2st thing</h4>
                <div className="info__block_descr-skeleton animation-skeleton"></div>
                <div className="info__block_img-skeleton animation-skeleton"></div>
            </div>
        </>
    );
};
