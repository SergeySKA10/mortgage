import './Buttons.scss';
import './ButtonMedia.scss';

export const Button = ({type, link, text}) => {
    const typeBtn = type ? type : 'main';
    return (
        <button className={`btn btn__${typeBtn}`}>
            <a className="roboto-bold" href={link}>{text}</a>
            {typeBtn === 'main' ? <div></div> : null}
        </button>
    )
}

export const ButtonPlay = ({type, link}) => {
    const typeBtn = type ? `play-${type}` : 'play';
    const animationClass = type ? `btn__animation-${type}` : 'btn__animation';

    return (
        <button className={`btn btn__${typeBtn} ${animationClass}`}>
            <a href={link}><div className={`btn__${typeBtn}-block`}></div></a>
        </button>
    )
}

export const ButtonArrow = ({type}) => {
    return (
        <button className={`btn btn__arrow-${type}`}><div></div></button>
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