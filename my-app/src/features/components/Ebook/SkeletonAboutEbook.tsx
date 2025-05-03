import './AboutEbook.scss';

export const SkeletonAboutEbook = () => {
    return (
        <div className="about_ebook__wrapper">
            <div className="about_ebook__cover">
                <div className="about_ebook__cover-skeleton animation-skeleton"></div>
            </div>
            <div className="about_ebook__content">
                <h2 className="header__h2-left about_ebook__header-skeleton animation-skeleton"></h2>
                <p className="about_ebook__descr-skeleton animation-skeleton"></p>
                {/* <Form format={format} index={index} id='book-form' text='Get the eBook'/> */}
            </div>
        </div>
    );
};
