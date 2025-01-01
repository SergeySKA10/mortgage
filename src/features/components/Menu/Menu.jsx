import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { closeMenu, menuActive } from '../Burger/burgerSlice';

import { Button } from '../Buttons/Buttons';
import { Line } from '../Line/Line';

import './Menu.scss';
import './MenuMedia.scss';
import logo from '../../../assets/icons/main_page/logo/NAF_Logo.svg';

const Menu = () => {
    // создаем state для ссылок на страницы
    const [linksPages, setLinksPages] = useState([
        {link: '/blog', text: 'Blog'},
        {link: '/ebook', text: 'Ebook'},
        {link: '/webinar', text: 'Webinar'}
    ]);
    // создаем state для ссылок на блоки главной страницы
    const [linksBlocks, setLinksBlocks] = useState([
        {link: 'getting', text: 'Your teachers'},
        {link: 'story', text: 'Your mortgage journey'},
        {link: 'customers', text: 'What our customers say'},
    ]);

    // создаем ссылки на блоки страницы 
    const linksBlocksOnMainPage = linksBlocks.map(el => (
        <li>
            <Link 
                onClick={() => closeMenu(dispatch)}     
                className="roboto-bold" 
                to={el.link}
                spy={true}
                smooth={true}
                duration={1000}>
                    {el.text}
                </Link></li>
    ));

    // создаем ссылки на страницы 
    const linksOnPages = linksPages.map(el => (
        <li>
            <NavLink 
                onClick={() => closeMenu(dispatch)} 
                className="roboto-bold" 
                to={el.link}>{el.text}</NavLink></li>
    )); 

    const dispatch = useDispatch();

    // переменные для работы с окном меню
    const menu = useSelector(state => state.menu.menu),
          classOpenMenu = menu === menuActive.open ? 'menu-active' : null,
          classOpenBlock = menu === menuActive.open ? 'menu__block-active' : null;

    // обработчик события keydown для закрытия меню
    useEffect(() => {
        document.addEventListener('keydown', (e) => hideMenu(e.code));
        
        return () => {
            document.removeEventListener('keydown', (e) => hideMenu(e.code))
        }
    }, [menu])

    // функция закрытия меню при событии клика на подложку или нажатия Escape
    const hideMenu = (target) => {
        if (menu === menuActive.open && target === document.querySelector('.menu')) {
            closeMenu(dispatch);
        }

        if (menu === menuActive.open && target === 'Escape') {
            closeMenu(dispatch);
        }
    }

    return (
        <div className={`menu ${classOpenMenu}`}
             onClick={(e) => hideMenu(e.target)} 
            >
            <div className={`menu__block ${classOpenBlock}`}>
                <div className="menu__logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="menu__content">
                    <ul className="menu__block_list">
                        {linksBlocksOnMainPage}
                        {linksOnPages}
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