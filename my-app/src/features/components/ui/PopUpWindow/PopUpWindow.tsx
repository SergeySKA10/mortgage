'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/redux.hooks';
import { useEffect } from 'react';
import Image from 'next/image';

import { showWindow } from './popUpWindowSlice';
import { Button } from '../Buttons/Button';

import './PopUpWindow.scss';

const PopUpWindow = () => {
    const dispatch = useAppDispatch();

    // получение состояния всплывающего окна
    const popUpWindow = useAppSelector((state) => state.window.popUpWindow);

    // функция изменения состояния демонстрации всплывающего окна
    const changeStylePopUpWindow = (): void => {
        if (document.documentElement.scrollTop > 1500) {
            showWindow(dispatch);
        }
    };

    // создание стилей для окна
    const clazz =
        popUpWindow === 'popUpActive'
            ? `story__window popUpActive`
            : 'story__window';

    useEffect(() => {
        window.addEventListener('scroll', changeStylePopUpWindow);

        return () => {
            window.removeEventListener('scroll', changeStylePopUpWindow);
        };
    }, []);

    return (
        <div className={clazz}>
            <div className="story__window_wrapper">
                <div className="story__window_quote">
                    <Image
                        src="https://raw.githubusercontent.com/SergeySKA10/mortgage/18d084c5ee990382bec9cf9c3f8875f856f339e0/src/assets/icons/main_page/quote/left-quote.svg"
                        width={10}
                        height={10}
                        alt="quote"
                    />
                </div>
                <p className="story__window_descr roboto-regular">
                    A mortgage isn`t just about a rate. It`s about building a
                    strategy to help you leverage your wealth.
                </p>
                <div className="story__window_profile">
                    <div className="story__window_profile-photo">
                        <Image
                            src="https://github.com/SergeySKA10/mortgage/blob/assets/src/assets/img/main_page/avatar_consultant/avatar_justin.png?raw=true"
                            alt="Justin"
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className="story__window_profile-name roboto-bold">
                        Justin
                    </div>
                </div>
            </div>
            <div className="story__window_line">
                <hr className="line__dark" />
            </div>
            <div className="story__window_button">
                <div className="roboto-regular">Have a question?</div>
                <Button type="mini" link="avatarJustin" text="Let's talk" />
            </div>
        </div>
    );
};

export default PopUpWindow;
