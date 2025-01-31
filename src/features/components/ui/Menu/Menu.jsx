import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { closeMenu, menuActive } from '../Burger/burgerSlice';

import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';

import { Button } from '../Buttons/Button';
import { Line } from '../Line/Line';

import './Menu.scss';
import './MenuMedia.scss';
import logo from '../../../../assets/icons/main_page/logo/NAF_Logo.svg';

const Menu = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    // const [linksOnSection, setLinksOnSection] = useState([]);

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

    // получение ссылок на секции из state
    const sectionLinks = useSelector(state => state.links.linksOnSection);

    // получение ссылок на страницы из state
    const pageLinks = useSelector(state => state.links.linksOnPages);

    // функция создания ссылок на блоки страницы
    const createLinksonSection = (arr) => {
        return arr.map(el => (
            <li key={el.id}>
                <Link 
                    onClick={() => closeMenu(dispatch)}     
                    className="roboto-bold" 
                    to={el.link}
                    spy={true}
                    smooth={true}
                    duration={1000}>
                        {el.text}
                </Link>
            </li>
        ));
    }

    // создаем ссылки на блоки главной страницы 
    const linksMain = createLinksonSection(sectionLinks.main);
    // создаем ссылки на блоки Blog страницы  
    const linksBlog = createLinksonSection(sectionLinks.blog);
    // создаем ссылки на блоки Webinar страницы  
    const linksWebinar = createLinksonSection(sectionLinks.webinar);
    // создаем ссылки на блоки Webinar страницы  
    const linksBook = createLinksonSection(sectionLinks.book);
    // создаем ссылки на блоки Webinar страницы  
    const linksSecondBook = createLinksonSection(sectionLinks.secondBook);

    // создаем ссылки на страницы 
    const linksOnPages = pageLinks.map(el => (
        <li key={el.id}>
            <NavLink 
                onClick={() => closeMenu(dispatch)} 
                className="roboto-bold" 
                to={el.link}>{el.text}
            </NavLink>
        </li>
    )); 

    // функция рендера ссылок на секции в зависимости от страницы
    const renderLinksonSection = () => {
        switch (location.pathname) {
            case "/":
                return linksMain;
            case "/blog":
                return linksBlog;
            case "/webinar":
                return linksWebinar;
            case "/ebook":
                return linksBook;
            case "/secondebook":
                return linksSecondBook;
            default: 
                return null;
        }
    }

    // создаем переменную для отображения статуса загрузки, ошибки или полученных данных
    const content = <ul className="menu__block_list">
                        {renderLinksonSection()}
                        {linksOnPages}
                    </ul>;

    return (
        <div className={`menu ${classOpenMenu}`}
             onClick={(e) => hideMenu(e.target)} 
            >
            <div className={`menu__block ${classOpenBlock}`}>
                <NavLink to='/' className="menu__logo" onClick={() => closeMenu(dispatch)}>
                    <img src={logo} alt="logo"/>
                </NavLink>
                <div className="menu__content">
                    {content}
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