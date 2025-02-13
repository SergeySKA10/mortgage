import { Link } from 'react-router-dom';

import './PromoEbook.scss';
import './PromoEbookMedia.scss';
import logo from '../../../assets/icons/main_page/logo/logo_white.svg'

const PromoEbook = ({author, nameBook, format, indexActiveFormat, setIndexActiveFormat}) => {
    // функция по изменению активного класса
    const onActive = (e) => {
        setIndexActiveFormat(+e.target.getAttribute('data-index'));
    }

    // формируем форматы книг
    const formats = format.map((el, i) => {
        const active = i === indexActiveFormat ? 'format-active' : '';
        return (
            <div className={`btn btn__ebook ${active}`} data-index={i} onClick={onActive}>
                {el}
            </div>
        )
    })

    return (
        <section className="promo_ebook">
            <header className="promo_ebook__header">
                <Link to='/' style={{display: 'block', width: '340px'}}>
                    <img src={logo} alt="logo"/>
                </Link>
            </header>
            <h1 className="promo_ebook__name header__h1 roboto-bold">{nameBook}</h1>
            <div className="promo_ebook__descr">
                <div className="promo_ebook__author roboto-bold">{author}</div>
                <div className="promo_ebook__btns">
                    {formats}
                </div>
            </div>
        </section>
    )
}

export default PromoEbook;