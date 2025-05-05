'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useContext, MouseEvent } from 'react';
import { BookContext } from '@/app/ebook/context/BookContext';

import './PromoEbook.scss';
import './PromoEbookMedia.scss';

const PromoEbook = () => {
    const {
        author,
        nameBook,
        format,
        indexActiveFormat,
        setIndexActiveFormat,
    } = useContext(BookContext);

    // функция по изменению активного класса
    const onActive = (e: MouseEvent) => {
        if (e.target && (e.target as HTMLElement)) {
            setIndexActiveFormat(
                +(e.target as HTMLDivElement).getAttribute('data-index')!
            );
        }
    };

    // формируем форматы книг
    const formats = format.map((el, i) => {
        const active = i === indexActiveFormat ? 'format-active' : '';
        return (
            <div
                tabIndex={0}
                key={i}
                className={`btn btn__ebook ${active}`}
                data-index={i}
                onClick={onActive}
            >
                {el}
            </div>
        );
    });

    return (
        <section className="promo_ebook">
            <header className="promo_ebook__header">
                <Link href="/" style={{ display: 'block', width: '340px' }}>
                    <Image
                        tabIndex={0}
                        src={'/logo/logo_white.svg'}
                        alt="logo"
                        width={335}
                        height={100}
                    />
                </Link>
            </header>
            <h1
                tabIndex={0}
                className="promo_ebook__name header__h1 roboto-bold"
            >
                {nameBook}
            </h1>
            <div className="promo_ebook__descr">
                <div tabIndex={0} className="promo_ebook__author roboto-bold">
                    {author}
                </div>
                <div tabIndex={0} className="promo_ebook__btns">
                    {formats}
                </div>
            </div>
        </section>
    );
};

export default PromoEbook;
