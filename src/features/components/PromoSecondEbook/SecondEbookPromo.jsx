import { Link } from 'react-router-dom';

import './SecondEbookPromo.scss';
import './SecondEbookPromoMedia.scss';
import logo from '../../../assets/icons/main_page/logo/logo_white.svg';

const SecondEbookPromo = ({author, nameBook}) => {
    return (
        <section class="second_ebook__promo">
            <header class="second_ebook__header">
                <Link to='/' style={{display: 'block', width: '340px'}}>
                    <img src={logo} alt="logo"/>
                </Link>
            </header>
            <h1 class="header__h1 roboto-bold">{nameBook}</h1>
            <div class="second_ebook__author roboto-bold">{author}</div>
        </section>
    )
}

export default SecondEbookPromo;