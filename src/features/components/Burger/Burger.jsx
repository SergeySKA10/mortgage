import {LineBurger} from '../Line/Line';

import './Burger.scss';
import './BurgerMedia.scss';

const Burger = () => {
    return (
        <div className="burger">
            <div className="burger__wrapper">
                <LineBurger/>
            </div>
        </div>
    )
}

export default Burger;