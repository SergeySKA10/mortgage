import { useSelector, useDispatch } from 'react-redux';

import { menuOpen } from './burgerSlice';

import './Burger.scss';
import './BurgerMedia.scss';


const Burger = () => {
    // переменные для работы с компонентом и меню
    const dispatch = useDispatch(),
          menu = useSelector(state => state.menu.menu),
          clazzBurger = `burger ${menu === 'open' ? 'burger_none' : null}`,
          clazzWrapper = `burger__wrapper ${menu === 'open' ? 'open_menu' : null}`
    
    // функция для открытия и скрытия меню
    const showMenu = () => {
        if (menu === 'close') {
            dispatch(menuOpen('open'));
            // document.body.style.overflow = 'hidden';
        } else {
            dispatch(menuOpen('close'));
            // document.body.style.overflow = '';
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