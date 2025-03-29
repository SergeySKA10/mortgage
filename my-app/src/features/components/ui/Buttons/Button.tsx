import './Buttons.scss';
import './ButtonMedia.scss';

export const Button = ({
    type,
    link,
    text,
}: {
    type?: string;
    link: string;
    text: string;
}) => {
    const typeBtn = type ? type : 'main';
    return (
        <button className={`btn btn__${typeBtn}`}>
            <a className="roboto-bold" href={link}>
                {text}
            </a>
            {typeBtn === 'main' ? <div></div> : null}
        </button>
    );
};
