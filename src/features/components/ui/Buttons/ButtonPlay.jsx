import { Link } from 'react-router-dom';

import './Buttons.scss';
import './ButtonMedia.scss';

export const ButtonPlay = ({type, link}) => {
    const typeBtn = type ? `play-${type}` : 'play';
    const animationClass = type ? `btn__animation-${type}` : 'btn__animation';

    return (
        <button className={`btn btn__${typeBtn} ${animationClass}`}>
            <Link to={link}><div className={`btn__${typeBtn}-block`}></div></Link>
        </button>
    )
}