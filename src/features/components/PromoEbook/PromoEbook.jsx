import { useState } from 'react';
import { Link } from 'react-router-dom';

import './PromoEbook.scss';
import './PromoEbookMedia.scss';
import logo from '../../../assets/icons/main_page/logo/logo_white.svg'

const PromoEbook = ({author, nameBook, format}) => {
    // state для активного индекса
    const [indexActive, setIndexActive] = useState();

    // функция по изменению активного класса
    const onActive = (e) => {
        setIndexActive(+e.target.getAttribute('data-index'));
    }

    // формируем форматы книг
    const formats = format.map((el, i) => {
        const active = i === indexActive ? 'format-active' : '';
        return (
            <div class={`btn btn__ebook ${active}`} data-index={i} onClick={onActive}>
                {el}
            </div>
        )
    })

    return (
        <section class="promo_ebook">
            <header class="promo_ebook__header">
                <Link to='/' style={{display: 'block', width: '340px'}}>
                    <img src={logo} alt="logo"/>
                </Link>
            </header>
            <h1 class="promo_ebook__name header__h1 roboto-bold">{nameBook}</h1>
            <div class="promo_ebook__descr">
                <div class="promo_ebook__author roboto-bold">{author}</div>
                <div class="promo_ebook__btns">
                    {formats}
                </div>
            </div>
        </section>
    )
}

export default PromoEbook;