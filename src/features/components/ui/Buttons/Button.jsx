import { Link } from 'react-router-dom';

import './Buttons.scss';
import './ButtonMedia.scss';

export const Button = ({type, link, text}) => {
    const typeBtn = type ? type : 'main';
    return (
        <button className={`btn btn__${typeBtn}`}>
            <Link className="roboto-bold" to={link}>{text}</Link>
            {typeBtn === 'main' ? <div></div> : null}
        </button>
    )
}







