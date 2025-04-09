import Link from 'next/link';
import type { IButtonProps } from '@/shared/shared-components/componentsTypes';
import './Buttons.scss';
import './ButtonMedia.scss';

export const Button = ({ type, link, text }: IButtonProps) => {
    const typeBtn = type ? type : 'main';
    return (
        <button className={`btn btn__${typeBtn}`}>
            <Link className="roboto-bold" href={link}>
                {text}
            </Link>
            {typeBtn === 'main' ? <div></div> : null}
        </button>
    );
};
