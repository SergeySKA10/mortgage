'use client';

import { Link as LinkSection } from 'react-scroll';
import Link from 'next/link';
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
                <LinkSection
                    tabIndex={0}
                    smooth={true}
                    duration={500}
                    to={el.link}
                    onClick={() => {
                        closeMenu(dispatch);
                    }}
                >
                    {el.text}
                </LinkSection>
            </li>
        ));
    };

    // создаем ссылки на блоки главной страницы
    const linksMain = createLinksonSection(sectionLinks.main);

    // создаем ссылки на страницы
    const linksOnPages = pageLinks.map((el) => (
        <li key={el.id}>
            <Link
                tabIndex={0}
                onClick={() => closeMenu(dispatch)}
                href={el.link}
            >
                {el.text}
            </Link>
        </li>
    ));

    // создаем переменную для отображения статуса загрузки, ошибки или полученных данных
    const content = (
        <ul className="menu__block_list">
            {linksMain}
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
