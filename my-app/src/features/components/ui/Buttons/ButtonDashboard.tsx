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

    // функция отправки пользователям продуктов по запросам
    const sendResourceToUser = (
        e: MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        (e.target as HTMLElement).style.backgroundColor = 'yellow';
        (e.target as HTMLElement).style.color = 'black';
        //....
    };

    // функция открытия формы заполнения
    const openForm = () => {
        console.log('hi');
        const popup = document.querySelector('.popup');
        console.log(popup);
        popup?.classList.add('popup-active');
        setDisabled(false);
    };

    const onHandleAction = (
        e: MouseEvent<HTMLButtonElement, MouseEvent>,
        action: IButtonDashboard['action']
    ): void => {
        console.log('hi1');
        switch (action) {
            case 'send':
                sendResourceToUser(e);
                break;
            case 'create':
                openForm();
                break;
            case 'change':
                openForm();
                break;
            case 'delete':
                openForm();
                break;
            default:
                throw new Error(
                    'Action is incorrect. ButtonDashboard prop.action is incorrect'
                );
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
