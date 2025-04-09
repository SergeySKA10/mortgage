'use client';

import Image from 'next/image';
import useGetData from '../../../../services/useGetData';
import setContent from '@/utils/setContent';
import { SliderSkeleton } from './SlideSkeleton';

import type { SlidesReviewsDB } from '@/shared/shared-components/dataTypesFromSQL';

import { useState, useEffect, JSX, MouseEvent } from 'react';

import { ButtonArrow } from '../Buttons/ButtonArrows';
import { Line } from '../Line/Line';

import type {
    IDotReview,
    ISlideReview,
} from '@/shared/shared-components/componentsTypes';

import './SliderReviews.scss';
import './SliderReviewsMedia.scss';

const SliderReviews = () => {
    // делаем запрос для получения данных
    const {
        process,
        getData: { data, isError, isPending },
    } = useGetData('slidesReviews');

    // создаем state для индекса слайдера
    const [indexSlide, setIndexSlide] = useState<number>(1);

    //state для отслеживания состояния кнопок и точек для переключения слайдов
    const [pressButton, setPressButton] = useState<boolean>(false);

    // создаем state для расчета offset
    const [offset, setOffset] = useState<number>(0);

    // создаем state для получения ширины слайда
    const [width, setWidth] = useState<number>(0);

    // создаем state для max значения offset
    const [maxOffset, setMaxOffset] = useState<number>(0);

    // создаем state для получения элемента обертки слайдов
    const [wrapperSlides, setWrapperSlides] = useState<HTMLElement | null>(
        null
    );

    // state для получения 1-ого слайд
    const [slide, setSlide] = useState<HTMLElement | null>(null);

    // создаем state для total
    const [total, setTotal] = useState<string>('0');

    // создаем state для dots
    const [dots, setDots] = useState<JSX.Element[]>([]);

    // функция преобразования строки в число
    function stringToDigits(str: string): number {
        return +str.replace(/\D/g, '');
    }

    // получаем ширину слайда и обертку и устанавливаем max значение offset
    useEffect(() => {
        setSlide(document.querySelector('.customers__slide') as HTMLElement);
        setWrapperSlides(
            document.querySelector('.customers__slides') as HTMLElement
        );
        if (slide) {
            setWidth(stringToDigits(window.getComputedStyle(slide).width) + 24);
        }
        if (data && (data as SlidesReviewsDB[]).length) {
            setMaxOffset(width * ((data as SlidesReviewsDB[]).length - 1));
        }
    }, [slide, wrapperSlides, data, width]);

    // установка total
    useEffect(() => {
        if (data && (data as SlidesReviewsDB[]).length) {
            setTotal(
                (data as SlidesReviewsDB[])?.length < 10
                    ? `0${(data as SlidesReviewsDB[])?.length}`
                    : `${(data as SlidesReviewsDB[])?.length}`
            );
        }
    }, [data]);

    // const slidesBlock = isError ? (
    //     <ErrorMessage />
    // ) : isPending ? (
    //     <Spinner />
    // ) : (
    //     data?.map((el) => {
    //         return <SlideReviews key={el.id} data={el} />;
    //     })
    // );

    // функция переключения слайдера на другой слайд
    const showNewSlide = (): void => {
        if (wrapperSlides) {
            wrapperSlides.style.transform = `translateX(-${offset}px)`;
        }
    };

    // переход на слайд при взаимодействии с dots или стрелками
    useEffect(() => {
        showNewSlide();
    }, [offset, pressButton]);

    // формирование точек
    useEffect(() => {
        if (data) {
            setDots(() =>
                (data as SlidesReviewsDB[]).map((el, i) => {
                    const activeClass =
                        i === indexSlide - 1 ? 'dot-active-white' : '';
                    return (
                        <Dot
                            key={i}
                            data={i}
                            activeClass={activeClass}
                            setIndexSlide={setIndexSlide}
                            width={width}
                            setOffset={setOffset}
                            setPressDot={setPressButton}
                        />
                    );
                })
            );
        }
    }, [data, width, indexSlide]);

    return (
        <div className="customers__slider">
            <div className="customers__slider_counter">
                <div className="customers__slider_current">
                    <span id="current-customers" className="roboto-bold">
                        {indexSlide < 10 ? `0${indexSlide}` : indexSlide}
                    </span>
                    <span id="total-customers" className="roboto-bold">
                        /{total}
                    </span>
                </div>
                <div className="customers__slider_arrows">
                    <ButtonArrow
                        type="left"
                        data="prev"
                        offset={offset}
                        setOffset={setOffset}
                        maxOffset={maxOffset}
                        setIndexSlide={setIndexSlide}
                        width={width}
                        setPressButton={setPressButton}
                        indexSlide={indexSlide}
                    />
                    <ButtonArrow
                        type="right"
                        data="next"
                        offset={offset}
                        setOffset={setOffset}
                        setIndexSlide={setIndexSlide}
                        indexSlide={indexSlide}
                        maxOffset={maxOffset}
                        width={width}
                        setPressButton={setPressButton}
                    />
                </div>
            </div>

            <div className="customers__slider_inner">
                <div className="customers__slides">
                    {setContent({
                        process,
                        isError,
                        isPending,
                        Skeleton: SliderSkeleton,
                        data: data,
                        Component: SlideReviews,
                    })}
                </div>

                <div className="customers__slider_dots">{dots}</div>
            </div>
        </div>
    );
};

const SlideReviews = ({ data }: ISlideReview) => {
    const { photo, city, name, profession, icon, reviews } = data;

    return (
        <div className="customers__slide">
            <div className="customers__slide-profile">
                <div className="customers__slide-photo">
                    <Image src={photo} alt="photo" height={110} width={110} />
                </div>
                <div className="customers__slide-info">
                    <div className="customers__slide-city roboto-bold">
                        {city}
                    </div>
                    <div className="customers__slide-name roboto-bold">
                        {name}
                    </div>
                    <div className="customers__slide-proff roboto-regular">
                        {profession}
                    </div>
                </div>
                <div className="customers__slide-social">
                    <Image src={icon} alt="social" height={20} width={20} />
                </div>
            </div>
            <div className="customers__slide_line">
                <Line />
            </div>
            <div className="customers__slide-descr">
                <div className="customers__slide-quote">
                    <Image
                        src="https://raw.githubusercontent.com/SergeySKA10/mortgage/18d084c5ee990382bec9cf9c3f8875f856f339e0/src/assets/icons/main_page/quote/right-quote.svg"
                        alt="quote"
                        height={25}
                        width={32}
                    />
                </div>
                <p className="customers__slide-text roboto-regular">
                    {reviews}
                </p>
            </div>
        </div>
    );
};

const Dot = ({
    activeClass,
    data,
    width,
    setOffset,
    setIndexSlide,
    setPressDot,
}: IDotReview) => {
    // функция установки offset и indexSlide при клике на dots
    const initialOffset = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ): void => {
        if (
            e.target &&
            (e.target as HTMLElement).getAttribute('data-slide-to')
        ) {
            const numSlide = +(e.target as HTMLElement).getAttribute(
                'data-slide-to'
            )!;
            setOffset(width * numSlide);
            setIndexSlide(numSlide + 1);
            setPressDot(true); // отслеживание нажатия на dot
        } else {
            console.error(
                `error: ${e.target} has not attribute 'data-slide-to'`
            );
        }
    };

    return (
        <div
            className={'customers__slider_dot ' + activeClass}
            data-slide-to={data}
            onClick={initialOffset}
        ></div>
    );
};

export default SliderReviews;
