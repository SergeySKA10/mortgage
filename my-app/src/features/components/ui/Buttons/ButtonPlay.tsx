import './Buttons.scss';
import './ButtonMedia.scss';

export const ButtonPlay = ({ type, link }: { type?: string; link: string }) => {
    const typeBtn = type ? `play-${type}` : 'play';
    const animationClass = type ? `btn__animation-${type}` : 'btn__animation';

    return (
        <button className={`btn btn__${typeBtn} ${animationClass}`}>
            <a href={link} target={'_blank'}>
                <div className={`btn__${typeBtn}-block`}></div>
            </a>
        </button>
    );
};
