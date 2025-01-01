import { useSelector, useDispatch } from 'react-redux';

import { openMenu, closeMenu, menuActive } from './burgerSlice';

import './Burger.scss';
import './BurgerMedia.scss';


const Burger = () => {
    // переменные для работы с компонентом и меню
    const dispatch = useDispatch(),
          menu = useSelector(state => state.menu.menu),
          clazzBurger = `burger ${menu === menuActive.open ? 'burger_none' : null}`,
          clazzWrapper = `burger__wrapper ${menu === menuActive.open ? 'open_menu' : null}`
    
    
    // функция для открытия и скрытия меню
    const showMenu = () => {
        if (menu === menuActive.close) {
            openMenu(dispatch);
        } else {
            closeMenu(dispatch);
        }
    }

    return (
        <div className={clazzBurger} onClick={() => showMenu()}>
            <div className={clazzWrapper}>
                <span/>
            </div>
        </div>
    )
}

export default Burger;