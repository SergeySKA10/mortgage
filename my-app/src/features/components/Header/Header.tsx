import Burger from '../ui/Burger/Burger';
import Menu from '../ui/Menu/Menu';

import './Header.scss';
import './HeaderMedia.scss';

const Header = () => {
    return (
        <header className="header__main">
            <Burger />
            <Menu />
        </header>
    );
};

export default Header;
