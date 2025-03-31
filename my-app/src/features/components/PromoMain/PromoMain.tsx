'use client';
import { useGetDurationVideo } from '@/features/api/youtubeApi';
import Image from 'next/image';

import { Button } from '../ui/Buttons/Button';
import { ButtonPlay } from '../ui/Buttons/ButtonPlay';
import { Line } from '../ui/Line/Line';

import './PromoMain.scss';
import './PromoMainMedia.scss';

const PromoMain = () => {
    const time = useGetDurationVideo(
        'https://www.youtube.com/watch?v=JPR6TEYp5tg'
    );

    return (
        <section className="promo_main">
            <div className="promo_main__descr">
                <h2 className="promo_main__subheader roboto-bold">
                    Why a mortgage is so much more than just a rate?
                </h2>
                <div className="promo_main__video">
                    <ButtonPlay link="https://www.youtube.com/watch?v=JPR6TEYp5tg" />
                    <div className="promo_main__time roboto-regular">
                        {time}
                    </div>
                </div>
            </div>

            <div className="promo_main__info">
                <div className="promo_main__logo">
                    <Image
                        src={'/logo/NAF_Logo.svg'}
                        width={240}
                        height={43}
                        alt="logo"
                    />
                </div>

                <h1 className="header__h1 roboto-bold">
                    Finding a mortgage is so{' '}
                    <span
                        className="header__h1-span_more"
                        data-text="much more"
                    >
                        much more
                    </span>{' '}
                    than{' '}
                    <span
                        className="header__h1-span_just"
                        data-text="just a rate"
                    >
                        {' '}
                        just a rate
                    </span>
                </h1>

                <p className="promo_main__info_text roboto-regular">
                    Rates change, but every mortgage journey starts with a
                    relationship. (Pssst...it`s not just about clicking a
                    button)
                </p>

                <div className="promo_main__line">
                    <Line />
                </div>

                <div className="promo_main__start">
                    <p className="promo_main__start_text roboto-bold">
                        Let us help you create your mortgage journey
                    </p>
                    <div className="promo_main__start_btns">
                        <Button text="Get started" link="#" />
                        <Button type="white" text="Schedule a time" link="#" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoMain;
