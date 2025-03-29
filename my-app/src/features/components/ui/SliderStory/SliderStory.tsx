'use client';

import { useAppSelector } from '@/hooks/redux.hooks';
import { useEffect, useState, useRef, MouseEvent, JSX } from 'react';

import { ButtonArrow } from '../Buttons/ButtonArrows';
import { Line } from '../Line/Line';

import type {
    ISlideStory,
    ISlidesStoryProps,
    IDotsSliderStoryProps,
} from '@/shared/shared-components/componentsTypes';

import './SliderStory.scss';
import './DotsSliderStory.scss';

const SliderStory = () => {
    // создаем реф для передачи слайдеру и последующей отмены события scroll окна браузера
    const refForScroll = useRef<HTMLDivElement | null>(null);

    // получем слайды из store
    const slides = useAppSelector((state) => state.sliderStory.slidesStory);

    // state для получения 1-ого слайд
    const [slide, setSlide] = useState<HTMLElement | null>(null);

    // создаем state для индекса слайдера
    const [indexSlide, setIndexSlide] = useState<number>(2);

    // создаем state для получения элемента обертки слайдов
    const [wrapperSlides, setWrapperSlides] = useState<HTMLElement | null>(
        null
    );

    // создаем state для dots
    const [dots, setDots] = useState<JSX.Element[]>([]);

    // создаем state для slidesBlock
    const [slidesBlock, setSlidesBlock] = useState<React.JSX.Element[]>([]);

    // функция для отмены стандартного поведения браузера
    const onScrollWindow = (e: globalThis.MouseEvent) => e.preventDefault();

    // эффект отмены стандартного поведения браузера при скролле слайдера
    useEffect(() => {
        if (refForScroll.current) {
            refForScroll.current.addEventListener('mouseenter', onScrollWindow);
        }
    }, [refForScroll]);

    // получаем элемент обертки слайдов
    useEffect(() => {
        setWrapperSlides(
            document.querySelector('.story__slider_wrapper') as HTMLElement
        );
        setSlide(document.querySelector('.story__slider_slide') as HTMLElement);
    }, [wrapperSlides]);

    // формируем slidesBlock
    useEffect(() => {
        setSlidesBlock(() =>
            slides.map((el: ISlideStory, i: number) => {
                // задаем классы активости
                const activeClass = i === indexSlide - 1 ? 'slide-active' : '';

                //задаем current для слайда
                const current = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;

                return (
                    <Slide
                        key={el.id}
                        data={el}
                        activeClass={activeClass}
                        current={current}
                    />
                );
            })
        );
    }, [slides, indexSlide]);

    // функция перелистывания слайдов
    const onScrollChange = () => {
        if (wrapperSlides) {
            const scroll = wrapperSlides.scrollTop;

            if (scroll === 0) {
                setIndexSlide(1);
                wrapperSlides.style.transform = `translateY(234px)`;
            } else if (scroll > 0 && scroll <= 170) {
                setIndexSlide(2);
                wrapperSlides.style.transform = `translateY(0px)`;
            } else if (scroll > 170 && scroll <= 340) {
                setIndexSlide(3);
            } else if (scroll > 340 && scroll <= 510) {
                setIndexSlide(4);
            } else if (scroll > 510 && scroll <= 680) {
                setIndexSlide(5);
                wrapperSlides.style.transform = `translateY(0px)`;
            } else if (scroll > 680) {
                setIndexSlide(6);
                wrapperSlides.style.transform = `translateY(-234px)`;
            }
        }
    };

    // РАБОТА СЛАЙДЕРА НА МОБИЛЬНЫХ УСТРОЙСТВАХ

    // создаем state для расчета offset
    const [offset, setOffset] = useState<number>(0);
    //state для отслеживания состояния кнопок и точек для переключения слайдов
    const [pressButton, setPressButton] = useState<boolean>(false);
    // создаем state для получения ширины слайда
    const [width, setWidth] = useState<number>(0);
    // создаем state для max значения offset
    const [maxOffset, setMaxOffset] = useState<number>(0);

    // функция преобразования строки в число
    function stringToDigits(str: string): number {
        return +str.replace(/\D/g, '');
    }

    // получаем ширину слайда и устанавливаем max значение offset
    useEffect(() => {
        if (slide) {
            setWidth(stringToDigits(window.getComputedStyle(slide).width) + 22);
        }
        setOffset(width);
        setMaxOffset(width * (slides.length - 1));
    }, [slide, width]);

    // функция переключения слайдера на другой слайд и установки изначального отступа
    const showNewSlide = () => {
        if (wrapperSlides && document.documentElement.clientWidth <= 1200) {
            console.log('offset');
            wrapperSlides.style.transform = `translateX(-${offset}px)`;
        }
    };

    // переход на слайд при взаимодействии с dots или стрелками
    useEffect(() => {
        showNewSlide();
    }, [offset, pressButton]);

    // ФОРМИРОВАНИЕ и РАБОТА С dots
    useEffect(() => {
        if (slides && wrapperSlides) {
            setDots(() =>
                slides.map((el: ISlideStory, i: number) => {
                    const activeClass =
                        i === indexSlide - 1 ? 'dot-active' : '';
                    return (
                        <Dot
                            key={i}
                            data={i}
                            activeClass={activeClass}
                            wrapper={wrapperSlides}
                            setOffset={setOffset}
                            width={width}
                            setIndexSlide={setIndexSlide}
                            setPressDot={setPressButton}
                        />
                    );
                })
            );
        }
    }, [slides, wrapperSlides, indexSlide]);

    return (
        <div className="story__slider">
            <div className="dots">{dots}</div>
            <div className="story__slider_inner">
                <div
                    ref={refForScroll}
                    className="story__slider_wrapper"
                    onScroll={onScrollChange}
                >
                    {slidesBlock}
                </div>
            </div>

            <div className="story__slider_arrows">
                <ButtonArrow
                    type="left"
                    data="prev"
                    offset={offset}
                    setOffset={setOffset}
                    maxOffset={maxOffset}
                    width={width}
                    setPressButton={setPressButton}
                    setIndexSlide={setIndexSlide}
                    indexSlide={indexSlide}
                />
                <ButtonArrow
                    type="right"
                    data="next"
                    offset={offset}
                    setOffset={setOffset}
                    maxOffset={maxOffset}
                    width={width}
                    setPressButton={setPressButton}
                    setIndexSlide={setIndexSlide}
                    indexSlide={indexSlide}
                />
            </div>
        </div>
    );
};

const Slide = ({ data, activeClass, current }: ISlidesStoryProps) => {
    const { header, descr } = data;
    return (
        <div className={'story__slider_slide ' + activeClass}>
            <div className="story__slider_counter roboto-bold">{current}</div>
            <div className="story__slider_header roboto-bold">{header}</div>
            <div className="story__slider_line">
                <Line />
            </div>
            <div className="story__slider_descr roboto-regular">{descr}</div>
        </div>
    );
};

const Dot = ({
    data,
    activeClass,
    wrapper,
    setOffset,
    setIndexSlide,
    setPressDot,
    width,
}: IDotsSliderStoryProps) => {
    // функция установки offset и indexSlide при клике на dots
    const initialScroll = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ): void => {
        if (document.documentElement.clientWidth <= 1200) {
            const numSlide = +(e.target as HTMLElement).getAttribute(
                'data-slide-to'
            )!;
            setOffset(width * numSlide);
            setIndexSlide(numSlide + 1);
            setPressDot(true); // отслеживание нажатия на dot
        } else {
            if (wrapper) {
                const numSlide = +(e.target as HTMLElement).getAttribute(
                    'data-slide-to'
                )!;
                const top = 170 * numSlide;
                console.log(top);
                wrapper.scrollTo({
                    top: top,
                    left: 0,
                    behavior: 'smooth',
                });
            }
        }
    };

    return (
        <div
            className={'dots-dot ' + activeClass}
            data-slide-to={data}
            onClick={initialScroll}
        ></div>
    );
};

export default SliderStory;
