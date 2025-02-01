import { useLocation } from 'react-router-dom';
import { Line } from '../ui/Line/Line';
import { Button } from '../ui/Buttons/Button';

import './Start.scss';
import './StartMedia.scss';

const Start = () => {
    const location = useLocation();

    // создаем уникальный идентификатор для секции
    const id = location.pathname === '/ebook' ? 'started/book'
    : location.pathname === '/webinar' ? 'started/webinar'
    : '';

    return (
        <section id={id} class="start">
            <div class="container">
                <div class="start__wrapper">
                    <div class="start__info">
                        <h2 class="header__h2-left roboto-bold">Get started with us</h2>
                        <p class="start__descr roboto-regular">Rates change, but every mortgage journey starts with a relationship. (Pssst...it's not just about clicking a button)</p>
                        <div class="start__line">
                            <Line/>
                        </div>
                        <div class="start__btns">
                            <Button text='Get started' link='#'/>
                            <Button type='white' text='Schedule a time' link='#'/>
                        </div>
                    </div>
                    <div class="start__img">
                        <img src="https://github.com/SergeySKA10/mortgage/blob/assets/src/assets/img/ebook_page/cat.png?raw=true" alt="house"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Start; 