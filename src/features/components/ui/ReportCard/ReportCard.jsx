import './ReportCard.scss';

const ReportCard = ({data: {src, header, descr}}) => {
    return (
        <div className="report__wrapper_elem">
            <div className="report__wrapper_icon">
                <img src={src} alt="rate"/>
            </div>
            <h4 className="header__h4 roboto-bold">{header}</h4>
            <p className="report__wrapper_descr roboto-regular">{descr}</p>
        </div>
    )
}

export default ReportCard;