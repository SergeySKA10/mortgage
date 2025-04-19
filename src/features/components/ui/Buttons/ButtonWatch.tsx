import Link from 'next/link';
import type { IButtonWatchProps } from '@/shared/shared-components/componentsTypes';
import './Buttons.scss';
import './ButtonMedia.scss';

export const ButtonWatch = ({ link }: IButtonWatchProps) => {
    return (
        <button tabIndex={0} className="btn btn__watch btn__animation">
            <Link
                tabIndex={-1}
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
