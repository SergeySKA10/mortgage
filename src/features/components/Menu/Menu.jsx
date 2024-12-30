import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { menuOpen } from '../Burger/burgerSlice';

import { Button } from '../Buttons/Buttons';
import { Line } from '../Line/Line';

import './Menu.scss';
import './MenuMedia.scss';
import logo from '../../../assets/icons/main_page/logo/NAF_Logo.svg';

const Menu = () => {
    // переменные для работы с окном меню
    const menu = useSelector(state => state.menu.menu),
          dispatch = useDispatch(),
          classOpenMenu = menu === 'open' ? 'menu-active' : null,
          classOpenBlock = menu === 'open' ? 'menu__block-active' : null;

    // обработчик события keydown для закрытия меню
    useEffect(() => {
        document.addEventListener('keydown', (e) => closeMenu(e.code));
        
        return () => {
            document.removeEventListener('keydown', (e) => closeMenu(e.code))
        }
    }, [menu])

    // функция закрытия меню при событии клика на подложку или нажатия Escape
    const closeMenu = (target) => {
        if (menu === 'open' && target === document.querySelector('.menu')) {
            dispatch(menuOpen('close'))
            document.body.style.overflow = '';
        }

        if (menu === 'open' && target === 'Escape') {
            dispatch(menuOpen('close'))
            document.body.style.overflow = '';
        }
    }

    return (
        <div className={`menu ${classOpenMenu}`}
             onClick={(e) => closeMenu(e.target)} 
            >
            <div className={`menu__block ${classOpenBlock}`}>
                <div className="menu__logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="menu__content">
                    <ul className="menu__block_list">
                        <li> <Link className="roboto-bold" to="#">Your teachers</Link></li>
                        <li> <Link className="roboto-bold" to="#">Your mortgage journey</Link></li>
                        <li> <Link className="roboto-bold" to="#">What our customers say</Link></li>
                        <li> <Link className="roboto-bold" to="/blog">Blog</Link></li>
                        <li> <Link className="roboto-bold" to="/ebook">Ebook</Link></li>
                        <li> <Link className="roboto-bold" to="/webinar">Webinar</Link></li>
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