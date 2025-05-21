'use client';

import { useAppDispatch } from '@/hooks/redux.hooks';
import {
    openPopup,
    setStateAction,
    setID,
} from '@/app/dashboard/dashboardSlice';
import type { IButtonDashboard } from '@/shared/shared-components/componentsTypes';

import './Buttons.scss';
import './ButtonMedia.scss';

export const ButtonDashboard = ({
    id,
    type,
    text,
    color = '',
    action,
}: IButtonDashboard) => {
    const style = type === 'create' ? 'main' : 'mini';
    const dispatch = useAppDispatch();

    // функция открытия формы заполнения
    const openForm = () => {
        openPopup(dispatch);
    };

    const onHandleAction = (
        target: HTMLElement,
        action: IButtonDashboard['action']
    ): void => {
        switch (action) {
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
                setStateAction(dispatch, action);
                setID(dispatch, id);
                onHandleAction(e.target as HTMLElement, action);
            }}
        >
            {text}
        </button>
    );
};
