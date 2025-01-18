import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { showWindow, windowActive } from './popUpWindowSlice';
import { Button } from '../Buttons/Button';

import './PopUpWindow.scss';
import quote from '../../../../assets/icons/main_page/quote/left-quote.svg';

const PopUpWindow = () => {
    const dispatch = useDispatch();
    
    // получение состояния всплывающего окна
    const popUpWindow = useSelector(state => state.window.popUpWindow);

    // функция изменения состояния демонстрации всплывающего окна
    const changeStylePopUpWindow = () => {
        if (document.documentElement.scrollTop > 1450) {
            showWindow(dispatch);
        }
    }

    // создание стилей для окна
    const clazz = popUpWindow === windowActive.show ? `story__window ${windowActive.show}` : "story__window";

    useEffect(() => {
        window.addEventListener('scroll', changeStylePopUpWindow);

        return () => {
            window.removeEventListener('scroll', changeStylePopUpWindow)
        }
    }, [])

    return (
        <div className={clazz}>
            <div className="story__window_wrapper">
                <div className="story__window_quote">
                    <img src={quote} alt="quote"/>
                </div>
                <p className="story__window_descr roboto-regular">
                    A mortgage isn't just about a rate. It's about building a strategy to help you leverage your wealth.
                </p>
                <div className="story__window_profile">
                    <div className="story__window_profile-photo">
                        <img src='https://github.com/SergeySKA10/mortgage/blob/assets/src/assets/img/main_page/avatar_consultant/avatar_justin.png?raw=true' alt="Justin"/>
                    </div>
                    <div className="story__window_profile-name roboto-bold">Justin</div>
                </div>
            </div>
            <div className="story__window_line">
                <hr className="line__dark"/>
            </div>
            <div className="story__window_button">
                <div className="roboto-regular">Have a question?</div>
                 <Button type='mini' link='avatarJustin' text="Let's talk"/>
            </div>
        </div>
    )
}

export default PopUpWindow;