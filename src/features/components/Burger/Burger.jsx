// import {LineBurger} from '../Line/Line';

import './Burger.scss';
import './BurgerMedia.scss';

const Burger = () => {
    function click() {
        const menu = document.querySelector('.menu');
        const block = document.querySelector('.menu__block');
        const wrap = document.querySelector('.burger');
        const burger = document.querySelector('.burger__wrapper');

        if (burger.classList.contains('open_menu')) {
            menu.classList.remove('menu-active');
            block.classList.remove('menu__block-active');
            wrap.classList.remove('burger_none');
            burger.classList.remove('open_menu');
            document.body.style.overflow = '';
        } else {
            menu.classList.add('menu-active');
            block.classList.add('menu__block-active');
            burger.classList.add('open_menu');
            wrap.classList.add('burger_none');
            document.body.style.overflow = 'hidden';
        }
    }
    return (
        <div className="burger">
            <div className="burger__wrapper" onClick={() => click()}>
                <span/>
            </div>
        </div>
    )
}

export default Burger;