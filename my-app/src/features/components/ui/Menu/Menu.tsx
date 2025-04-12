'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '@/hooks/redux.hooks';
import { useEffect } from 'react';
import { closeMenu } from '../Burger/burgerSlice';

import type { ILink } from '@/shared/shared-components/componentsTypes';

import { Button } from '../Buttons/Button';
import { Line } from '../Line/Line';

import './Menu.scss';
import './MenuMedia.scss';

const Menu = () => {
    const dispatch = useAppDispatch();
    const location = usePathname();

    // const [linksOnSection, setLinksOnSection] = useState([]);

    // переменные для работы с окном меню
    const menu = useAppSelector((state) => state.menu.menu),
        classOpenMenu = menu === 'open' ? 'menu-active' : null,
        classOpenBlock = menu === 'open' ? 'menu__block-active' : null;

    // обработчик события keydown для закрытия меню
    useEffect(() => {
        document.addEventListener('keydown', (e) => hideMenu(e.code));

        return () => {
            document.removeEventListener('keydown', (e) => hideMenu(e.code));
        };
    }, [menu]);

    // функция закрытия меню при событии клика на подложку или нажатия Escape
    const hideMenu = (target: EventTarget | KeyboardEvent['code']): void => {
        if (menu === 'open' && target === document.querySelector('.menu')) {
            closeMenu(dispatch);
        }

        if (menu === 'open' && target === 'Escape') {
            closeMenu(dispatch);
        }
    };

    // получение ссылок на секции из state
    const sectionLinks = useAppSelector((state) => state.links.linksOnSection);

    // получение ссылок на страницы из state
    const pageLinks = useAppSelector((state) => state.links.linksOnPages.pages);

    // функция создания ссылок на блоки страницы
    const createLinksonSection = (arr: ILink[]) => {
        return arr.map((el) => (
            <li key={el.id}>
                <Link
                    tabIndex={0}
                    onClick={() => closeMenu(dispatch)}
                    className="roboto-bold"
                    href={`#${el.link}`}
                >
                    {el.text}
                </Link>
            </li>
        ));
    };

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
    const linksOnPages = pageLinks.map((el) => (
        <li key={el.id}>
            <Link
                tabIndex={0}
                onClick={() => closeMenu(dispatch)}
                className="roboto-bold"
                href={el.link}
            >
                {el.text}
            </Link>
        </li>
    ));

    // функция рендера ссылок на секции в зависимости от страницы
    const renderLinksonSection = () => {
        switch (location) {
            case '/':
                return linksMain;
            case '/blog':
                return linksBlog;
            case '/webinar':
                return linksWebinar;
            case '/ebook':
                return linksBook;
            case '/secondebook':
                return linksSecondBook;
            default:
                return null;
        }
    };

    // создаем переменную для отображения статуса загрузки, ошибки или полученных данных
    const content = (
        <ul className="menu__block_list">
            {renderLinksonSection()}
            {linksOnPages}
        </ul>
    );

    return (
        <div
            className={`menu ${classOpenMenu}`}
            onClick={(e) => hideMenu(e.target)}
        >
            <div className={`menu__block ${classOpenBlock}`}>
                <Link
                    tabIndex={0}
                    href="/"
                    className="menu__logo"
                    onClick={() => closeMenu(dispatch)}
                >
                    <Image
                        src={'/logo/NAF_Logo.svg'}
                        width={240}
                        height={43}
                        alt="logo"
                    />
                </Link>
                <div className="menu__content">
                    {content}
                    <div className="menu__line">
                        <Line />
                    </div>
                    <div className="menu__buttons">
                        <Button link="#" text="Get Started" />
                        <Button type="white" link="#" text="Schedule a time" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
