import { Link } from 'react-router-dom';

import './SecondEbookPromo.scss';
import './SecondEbookPromoMedia.scss';
import logo from '../../../assets/icons/main_page/logo/logo_white.svg';

const SecondEbookPromo = ({author, nameBook}) => {
    return (
        <section className="second_ebook__promo">
            <header className="second_ebook__header">
                <Link to='/' style={{display: 'block', width: '340px'}}>
                    <img src={logo} alt="logo"/>
                </Link>
            </header>
            <h1 className="header__h1 roboto-bold">{nameBook}</h1>
            <div className="second_ebook__author roboto-bold">{author}</div>
        </section>
    )
}

export default SecondEbookPromo;