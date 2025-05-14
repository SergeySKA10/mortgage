'use client';
import { useState, MouseEvent } from 'react';
import type { IButtonDashboard } from '@/shared/shared-components/componentsTypes';

import './Buttons.scss';
import './ButtonMedia.scss';

export const ButtonDashboard = ({
    type,
    text,
    color = '',
    action,
}: IButtonDashboard) => {
    const style = type === 'create' ? 'main' : 'mini';
    const [disabled, setDisabled] = useState<boolean>(false);

    const onHandleAction = (
        e: MouseEvent<HTMLButtonElement, MouseEvent>,
        action: IButtonDashboard['action']
    ): void => {
        if (action === 'send') {
            (e.target as HTMLElement).style.backgroundColor = 'yellow';
            (e.target as HTMLElement).style.color = 'black';
        }
    };

    return (
        <button
            tabIndex={0}
            className={`btn btn__${style}`}
            style={{ backgroundColor: color }}
            onClick={(e) => {
                onHandleAction(e, action);
                setDisabled(true);
            }}
            disabled={disabled}
        >
            {text}
        </button>
    );
};
