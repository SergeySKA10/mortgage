import { Link } from 'react-router-dom';

import './Buttons.scss';
import './ButtonMedia.scss';

export const ButtonWatch = ({link}) => {
    return (
        <button className="btn btn__watch btn__animation">
            <Link to={link} target={'_blank'} style={{textDecoration: "none"}}>
                <div className="btn btn__watch-eyelid">
                    <div className="btn btn__watch-eys"></div>
                </div>
            </Link>
            
        </button>
    )
}