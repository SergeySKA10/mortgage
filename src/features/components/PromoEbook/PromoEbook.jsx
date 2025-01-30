import './PromoEbook.scss';
import './PromoEbookMedia.scss';
import logo from '../../../assets/icons/main_page/logo/logo_white.svg'

const PromoEbook = ({author, nameBook}) => {
    return (
        <section class="promo_ebook">
            <header class="promo_ebook__header">
                <img src={logo} alt="logo"/>
            </header>
            <h1 class="promo_ebook__name header__h1 roboto-bold">{nameBook}</h1>
            <div class="promo_ebook__descr">
                <div class="promo_ebook__author roboto-bold">{author}</div>
                <div class="promo_ebook__btns">
                    <div class="btn btn__ebook"><a class="roboto-bold" href="#">PDF</a></div>
                    <div class="btn btn__ebook"><a class="roboto-bold" href="#">ePUB</a></div>
                </div>
            </div>
        </section>
    )
}

export default PromoEbook;