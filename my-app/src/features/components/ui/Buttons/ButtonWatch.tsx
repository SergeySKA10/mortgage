import Link from 'next/link';
import type { IButtonWatchProps } from '@/shared/shared-components/componentsTypes';
import './Buttons.scss';
import './ButtonMedia.scss';

export const ButtonWatch = ({ link }: IButtonWatchProps) => {
    return (
        <button className="btn btn__watch btn__animation">
            <Link
                href={`${link}`}
                target={'_blank'}
                style={{ textDecoration: 'none' }}
            >
                <div className="btn btn__watch-eyelid">
                    <div className="btn btn__watch-eys"></div>
                </div>
            </Link>
        </button>
    );
};
