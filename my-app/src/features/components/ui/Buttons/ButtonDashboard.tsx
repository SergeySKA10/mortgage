import type { IButtonDashboard } from '@/shared/shared-components/componentsTypes';

import './Buttons.scss';
import './ButtonMedia.scss';

export const ButtonDashboard = ({
    type,
    text,
    color = '',
}: IButtonDashboard) => {
    const style = type === 'create' ? 'main' : 'mini';
    return (
        <button
            tabIndex={0}
            className={`btn btn__${style}`}
            style={{ backgroundColor: color }}
        >
            {text}
        </button>
    );
};
