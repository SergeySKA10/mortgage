'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/redux.hooks';

import { openMenu, closeMenu } from './burgerSlice';

import './Burger.scss';
import './BurgerMedia.scss';

const Burger = () => {
    // переменные для работы с компонентом и меню
    const dispatch = useAppDispatch(),
        menu = useAppSelector((state) => state.menu.menu),
        clazzBurger = `burger ${menu === 'open' ? 'burger_none' : null}`,
        clazzWrapper = `burger__wrapper ${
            menu === 'open' ? 'open_menu' : null
        }`;

    // функция для открытия и скрытия меню
    const showMenu = () => {
        if (menu === 'close') {
            openMenu(dispatch);
        } else {
            closeMenu(dispatch);
        }
    };

    return (
        <div className={clazzBurger} onClick={() => showMenu()}>
            <div className={clazzWrapper}>
                <span />
            </div>
        </div>
    );
};

export default Burger;
