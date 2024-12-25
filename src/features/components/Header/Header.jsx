import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";

import './Header.scss';

const Header = () => {
    return (
        <header className="header__main">
           <Burger/>
           <Menu/>
        </header>
    )
}

export default Header;