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

export const ButtonPlay = ({type, link}) => {
    const typeBtn = type ? `play-${type}` : 'play';
    const animationClass = type ? `btn__animation-${type}` : 'btn__animation';

    return (
        <button className={`btn btn__${typeBtn} ${animationClass}`}>
            <Link to={link}><div className={`btn__${typeBtn}-block`}></div></Link>
        </button>
    )
}

export const ButtonArrow = ({type, data, offset, setOffset, maxOffset, width, setPressButton, setIndexSlide, indexSlide}) => {
    // функция установки offset и indexSlide при клике на кнопки
    const initialOffset = (target) => {
        if (target.getAttribute('data-arrow') === 'next') {
            if (offset === maxOffset) {
                setOffset(0);
            } else {
                setOffset(offset => offset + width)
            }
            
            setPressButton(true); // отслеживание нажатия на кнопку

            if (indexSlide === maxOffset / width + 1) {
                setIndexSlide(1);
            } else {
                setIndexSlide(indexSlide => indexSlide + 1);
            }
        }

        if (target.getAttribute('data-arrow') === 'prev') {
            if (offset === 0) {
                setOffset(maxOffset);
            } else {
                setOffset(offset => offset - width);
            }

            setPressButton(true); // отслеживание нажатия на кнопку

            if (indexSlide === 1) {
                setIndexSlide(maxOffset / width + 1);
            } else {
                setIndexSlide(indexSlide => indexSlide - 1);
            }
        }
    }

    return (
        <button 
            className={`btn btn__arrow-${type}`} 
            data-arrow={data} 
            onClick={(e) => {
                initialOffset(e.target);
            }
        }><div></div></button>
    )
}

export const ButtonDownLoad = () => {
    return (
        <button className="btn btn__watch-download">
            <div className="btn btn__watch-download-text roboto-bold">Download</div>
            <div className="btn btn__watch-download-arrow"></div>
        </button>
    )
}

export const ButtonWatch = () => {
    return (
        <button className="btn btn__watch btn__animation">
            <div className="btn btn__watch-eyelid">
                <div className="btn btn__watch-eys"></div>
            </div>
        </button>
    )
}