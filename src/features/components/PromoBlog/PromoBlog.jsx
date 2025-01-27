import { Link } from 'react-router-dom';

import './PromoBlog.scss';
import './PromoBlogMedia.scss';

import logo from '../../../assets/icons/main_page/logo/NAF_Logo.svg';

const PromoBlog = () => {
    return (
        <section class="promo_blog">
            <header class="promo_blog__header">
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
            </header>
        </section> 
    )
}

export default PromoBlog;