import './Menu.scss';
import './MenuMedia.scss';
import logo from '../../../assets/icons/main_page/logo/NAF_Logo.svg';

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu__block">
                <div className="menu__block_close">
                    <div></div>
                </div>
                <div className="menu__logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="menu__content">
                    <ul className="menu__block_list">
                        <li> <a className="roboto-bold" href="#">Your teachers</a></li>
                        <li> <a className="roboto-bold" href="#">Your mortgage journey</a></li>
                        <li> <a className="roboto-bold" href="#">What our customers say</a></li>
                        <li> <a className="roboto-bold" href="#">Blog</a></li>
                        <li> <a className="roboto-bold" href="#">Ebook</a></li>
                        <li> <a className="roboto-bold" href="#">Webinar</a></li>
                    </ul>
                    <div className="menu__line">
                        <hr className="line_dark"/>
                    </div>
                    <div className="menu__buttons">
                        <button className="btn btn__rct">
                            <a className="roboto-bold" href="#">Get started</a>
                            <div></div>
                        </button>
                        <button className="btn btn__white">
                            <a className="roboto-bold" href="#">Schedule a time</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;