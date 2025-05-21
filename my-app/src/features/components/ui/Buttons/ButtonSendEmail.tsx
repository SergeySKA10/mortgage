'use client';

import { useState } from 'react';

import './Buttons.scss';
import './ButtonMedia.scss';

export const ButtonSendEmail = ({ text }: { text: string }) => {
    const [disabled, setDisabled] = useState<boolean>(false);

    // функция отправки пользователям продуктов по запросам
    const sendResourceToUser = (target: HTMLElement) => {
        target.style.backgroundColor = 'yellow';
        target.style.color = 'black';
        //....
    };

    return (
        <button
            tabIndex={0}
            className={`btn btn__mini`}
            style={{ backgroundColor: 'grey' }}
            onClick={(e) => {
                sendResourceToUser(e.target as HTMLElement);
                setDisabled(true);
            }}
            disabled={disabled}
        >
            {text}
        </button>
    );
};
