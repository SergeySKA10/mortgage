import './ReportCard.scss';

const ReportCard = ({data: {src, header, descr}}) => {
    return (
        <div class="report__wrapper_elem">
            <div class="report__wrapper_icon">
                <img src={src} alt="rate"/>
            </div>
            <h4 class="header__h4 roboto-bold">{header}</h4>
            <p class="report__wrapper_descr roboto-regular">{descr}</p>
        </div>
    )
}

export default ReportCard;