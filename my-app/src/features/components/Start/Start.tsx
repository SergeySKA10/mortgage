'use client';

import { usePathname } from 'next/navigation';
import { Line } from '../ui/Line/Line';
import { Button } from '../ui/Buttons/Button';
import Image from 'next/image';

import './Start.scss';
import './StartMedia.scss';

const Start = () => {
    const location = usePathname();

    // создаем уникальный идентификатор для секции
    const id =
        location === '/ebook'
            ? 'started-book'
            : location === '/webinar'
            ? 'started-webinar'
            : '';

    return (
        <section id={id} className="start">
            <div className="container">
                <div className="start__wrapper">
                    <div className="start__info">
                        <h2
                            tabIndex={0}
                            className="header__h2-left roboto-bold"
                        >
                            Get started with us
                        </h2>
                        <p tabIndex={0} className="start__descr roboto-regular">
                            Rates change, but every mortgage journey starts with
                            a relationship. (Pssst...it`s not just about
                            clicking a button)
                        </p>
                        <div className="start__line">
                            <Line />
                        </div>
                        <div className="start__btns">
                            <Button text="Get started" link="#" />
                            <Button
                                type="white"
                                text="Schedule a time"
                                link="#"
                            />
                        </div>
                    </div>
                    <div className="start__img">
                        <Image
                            tabIndex={0}
                            src="https://github.com/SergeySKA10/mortgage/blob/assets/src/assets/img/ebook_page/cat.png?raw=true"
                            alt="house"
                            width={690}
                            height={402}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;
