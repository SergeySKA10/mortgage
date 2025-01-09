import { useQuery } from '@tanstack/react-query';
import { useHttp } from '../../../hooks/http.hook';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { closeMenu, menuActive } from '../Burger/burgerSlice';

import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';

import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Button } from '../Buttons/Buttons';
import { Line } from '../Line/Line';

import './Menu.scss';
import './MenuMedia.scss';
import logo from '../../../assets/icons/main_page/logo/NAF_Logo.svg';

const Menu = () => {
    const dispatch = useDispatch();
    const request = useHttp();
    // const location = useLocation();

    // создание state для ссылок на секции
    // const [linksOnSection, setLinksOnSection] = useState({linksOnSection:{}});
    // const [links, setLinks] = useState([])

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

    // запрос в бд для получения ссылок на секции главной страницы
    const {data: sectionLinks, isError: errorSectionLinks, isPending: loadingSectionLinks} = useQuery({
        queryKey: ['linksOnSection'], 
        queryFn: () => request('http://localhost:3001/linksOnSection')
    });
    // запрос в бд для получения ссылок на страницы
    const {data: pageLinks, isError: errorPageLinks, isPending: loadingPageLinks} = useQuery({
        queryKey: ['linksOnPage'],
        queryFn: () => request('http://localhost:3001/linksOnPages')
    });

    // создаем ссылки на блоки страницы 
    // useEffect(() => {
    //     if (sectionLinks) {
    //         setLinksOnSection(linksOnSection => ({
    //             linksOnSection: {...sectionLinks}
    //         }))
    //     }
    // }, [sectionLinks]);


    // useEffect(() => {
    //     if ("main" in linksOnSection.linksOnSection) {
    //         console.log(location)
    //         if (location.pathname === '/') {
    //             setLinks(links => linksOnSection.linksOnSection.main.map(el => (
    //                     <li key={el.id}>
    //                         <Link 
    //                             onClick={() => closeMenu(dispatch)}     
    //                             className="roboto-bold" 
    //                             to={el.link}
    //                             spy={true}
    //                             smooth={true}
    //                             duration={1000}>
    //                                 {el.text}
    //                         </Link>
    //                     </li>
    //                 )))
    //         } else if (location.pathname === '/blog') {
    //             console.log(location)
    //             setLinks(links => linksOnSection.linksOnSection.blog.map(el => (
    //                 <li key={el.id}>
    //                     <Link 
    //                         onClick={() => closeMenu(dispatch)}     
    //                         className="roboto-bold" 
    //                         to={el.link}
    //                         spy={true}
    //                         smooth={true}
    //                         duration={1000}>
    //                             {el.text}
    //                     </Link>
    //                 </li>
    //             )))
    //         }
    //     }

    // }, [linksOnSection, location]);

    // создаем ссылки на блоки страницы 
    const linksOnSection = sectionLinks?.map(el => (
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

    // создаем ссылки на страницы 
    const linksOnPages = pageLinks?.map(el => (
        <li key={el.id}>
            <NavLink 
                onClick={() => closeMenu(dispatch)} 
                className="roboto-bold" 
                to={el.link}>{el.text}
            </NavLink>
        </li>
    )); 

    // const [content, setContent] = useState(null);

    // useEffect(() => {
    //     console.log(links)
    //     if ((loadingSectionLinks || loadingPageLinks) && links.length === 0) {
    //         setContent(<Spinner/>);
    //     } else if (errorSectionLinks || errorPageLinks) {
    //         setContent(<ErrorMessage/>)
    //     } else {
    //         setContent(content => (
    //             <ul className="menu__block_list">
    //                 {links}
    //                 {linksOnPages}
    //             </ul>
    //         ))
    //     }
    // }, [links])

    // создаем переменную для отображения статуса загрузки, ошибки или полученных данных
    const content = loadingSectionLinks || loadingPageLinks ? <Spinner/>
                    : errorSectionLinks || errorPageLinks ? <ErrorMessage/>
                    :   <ul className="menu__block_list">
                            {linksOnSection}
                            {linksOnPages}
                        </ul>;

    return (
        <div className={`menu ${classOpenMenu}`}
             onClick={(e) => hideMenu(e.target)} 
            >
            <div className={`menu__block ${classOpenBlock}`}>
                <div className="menu__logo">
                    <img src={logo} alt="logo"/>
                </div>
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