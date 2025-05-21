'use client';

import { useAppSelector, useAppDispatch } from '@/hooks/redux.hooks';
import { KeyboardEvent, useEffect } from 'react';
import { ContentPopup } from './ContentPopup';
import { hidePopup } from '../dashboardSlice';
import './PopUp.scss';

export const PopUp = () => {
    const statePopup = useAppSelector((state) => state.dashboard.popup);
    const dispatch = useAppDispatch();

    useEffect(() => {
        document.addEventListener('keydown', (e) => closePopup(e.code));

        return () => {
            document.removeEventListener('keydown', (e) => closePopup(e.code));
        };
    }, []);

    const closePopup = (target: EventTarget | KeyboardEvent['code']) => {
        if (target === 'Escape') {
            hidePopup(dispatch);
        }
        if (target && target === document.querySelector('.popup')) {
            hidePopup(dispatch);
        }
    };

    return (
        <div
            className={`popup ${statePopup}`}
            onClick={(e) => closePopup(e.target)}
        >
            <ContentPopup />
        </div>
    );
};
