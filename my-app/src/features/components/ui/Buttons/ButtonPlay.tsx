import type { IButtonProps } from '@/shared/shared-components/componentsTypes';
import './Buttons.scss';
import './ButtonMedia.scss';

export const ButtonPlay = ({ type, link }: IButtonProps) => {
    const typeBtn = type ? `play-${type}` : 'play';
    const animationClass = type ? `btn__animation-${type}` : 'btn__animation';

    return (
        <button
            tabIndex={0}
            className={`btn btn__${typeBtn} ${animationClass}`}
        >
            <a tabIndex={-1} href={link} target={'_blank'}>
                <div className={`btn__${typeBtn}-block`}></div>
            </a>
        </button>
    );
};
