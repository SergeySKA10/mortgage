import { Button } from '../Buttons/Buttons';
import { Line } from '../Line/Line';

import './Menu.scss';
import './MenuMedia.scss';
import logo from '../../../assets/icons/main_page/logo/NAF_Logo.svg';

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu__block">
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
                        <Line/>
                    </div>
                    <div className="menu__buttons">
                        <Button link='#' text='Get Started'/>
                        <Button type='white' link='#' text='Schedule a time'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;