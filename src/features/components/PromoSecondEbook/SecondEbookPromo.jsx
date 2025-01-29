import { Link } from 'react-router-dom';

import './SecondEbookPromo.scss';
import './SecondEbookPromoMedia.scss';
import logo from '../../../assets/icons/main_page/logo/logo_white.svg';

const SecondEbookPromo = () => {
    return (
        <section class="second_ebook__promo">
            <header class="second_ebook__header">
                <Link to='/'>
                    <img src={logo} alt="logo"/>
                </Link>
            </header>
            <h1 class="header__h1 roboto-bold">9 Things You Must Know About Buying Your First Home</h1>
            <div class="second_ebook__author roboto-bold">Scott Johnson</div>
        </section>
    )
}

export default SecondEbookPromo;