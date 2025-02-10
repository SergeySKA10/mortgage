import { useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';

import { ButtonArrow } from '../Buttons/ButtonArrows';
import {Line} from '../Line/Line';

import './SliderStory.scss';
import './DotsSliderStory.scss';

const SliderStory = () => {
    // создаем реф для передачи слайдеру и последующей отмены события scroll окна браузера
    const refForScroll = useRef();

    // получем слайды из store 
    const slides = useSelector(state => state.sliderStory.slidesStory);

     // state для получения 1-ого слайд
     const [slide, setSlide] = useState(null);

    // создаем state для индекса слайдера
    const [indexSlide, setIndexSlide] = useState(2);

    // создаем state для получения элемента обертки слайдов
    const [wrapperSlides, setWrapperSlides] = useState(null);

    // создаем state для dots
    const [dots, setDots] = useState([]);

    // создаем state для slidesBlock
    const [slidesBlock, setSlidesBlock] = useState([]);

    // функция для отмены стандартного поведения браузера
    const onScrollWindow = (e) => e.preventDefault();

    // эффект отмены стандартного поведения браузера при скролле слайдера
    useEffect(() => {
        refForScroll.current.addEventListener('mouseenter', onScrollWindow);
    }, [refForScroll])

    // получаем элемент обертки слайдов
    useEffect(() => {
        setWrapperSlides(document.querySelector('.story__slider_wrapper'));
        setSlide(document.querySelector('.story__slider_slide'));
    }, [wrapperSlides])

    // формируем slidesBlock
    useEffect(() => {
        setSlidesBlock(slidesBlock => slides.map((el, i) => {
            // задаем классы активости
            const activeClass = i === indexSlide - 1 ? 'slide-active' : '';
    
            //задаем current для слайда
            const current = i+1 < 10 ? `0${i+1}` : i+1;
    
            return (
                <Slide key={el.id} data={el} activeClass={activeClass} current={current}/>
            )
        }))
    }, [slides, indexSlide]);

    // функция перелистывания слайдов
    const onScrollChange = (target) => {
        console.log(wrapperSlides.scrollTop);
        let scroll = wrapperSlides.scrollTop;

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
            wrapperSlides.style.transform = `translateY(-234px)`
        }
    }

    // РАБОТА СЛАЙДЕРА НА МОБИЛЬНЫХ УСТРОЙСТВАХ

    // создаем state для расчета offset
    const [offset, setOffset] = useState(0);
    //state для отслеживания состояния кнопок и точек для переключения слайдов
    const [pressButton, setPressButton] = useState(false);
    // создаем state для получения ширины слайда
    const [width, setWidth] = useState(0);
    // создаем state для max значения offset
    const [maxOffset, setMaxOffset] = useState(0);

    // функция преобразования строки в число
    function stringToDigits(str) {
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

    // функция переключения слайдера на другой слайд
    const showNewSlide = () => {
        if (wrapperSlides) {
            console.log(offset, indexSlide);
            wrapperSlides.style.transform = `translateX(-${offset}px)`;
        }
    }

    // установка изначального отступа
    let styleOffset;

    if (document.documentElement.clientWidth <= 1200) {
        styleOffset = {transform: `translateX(-${width}px)`}
    } else {
        styleOffset = null;
    }

    // переход на слайд при взаимодействии с dots или стрелками
    useEffect(() => {
        showNewSlide();
    }, [offset, pressButton]);

    
    // ФОРМИРОВАНИЕ и РАБОТА С dots
    useEffect(() => {
        if (slides && wrapperSlides) {
            setDots(dots => slides.map((el, i) => {
                    const activeClass = i === indexSlide - 1 ? 'dot-active' : '';
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
                    )
                })
            )
        }
    }, [slides, wrapperSlides, indexSlide]);

    return (
        <div className="story__slider">
            <div className="dots">
                {dots}
            </div>
            <div className="story__slider_inner">
                <div ref={refForScroll} className="story__slider_wrapper" style={styleOffset} onScroll={onScrollChange}>
                    {slidesBlock}
                </div>
            </div>
            

            <div className="story__slider_arrows">
                <ButtonArrow 
                    type='left'
                    data='prev'
                    offset={offset}
                    setOffset={setOffset}
                    maxOffset={maxOffset}
                    width={width}
                    setPressButton={setPressButton}
                    setIndexSlide={setIndexSlide}
                    indexSlide={indexSlide}/>
                <ButtonArrow 
                    type='right'
                    data='next'
                    offset={offset}
                    setOffset={setOffset}
                    maxOffset={maxOffset}
                    width={width}
                    setPressButton={setPressButton}
                    setIndexSlide={setIndexSlide}
                    indexSlide={indexSlide}/>
            </div>
        </div>
    )
}


const Slide = ({data, activeClass, current}) => {
    const {header, descr} = data;
    return (
        <div className={'story__slider_slide ' + activeClass}>
            <div className="story__slider_counter roboto-bold">{current}</div>
            <div className="story__slider_header roboto-bold">{header}</div>
            <div className="story__slider_line">
                <Line/>
            </div>
            <div className="story__slider_descr roboto-regular">{descr}</div>
        </div>
    )
}

const Dot = ({data, activeClass, wrapper, setOffset, setIndexSlide, setPressDot, width}) => {
    // функция установки offset и indexSlide при клике на dots
    const initialScroll = (e) => {
        if (document.documentElement.clientWidth <= 1200) {
            const numSlide = +e.target.getAttribute('data-slide-to');
            setOffset(width * numSlide);
            setIndexSlide(numSlide + 1);
            setPressDot(true); // отслеживание нажатия на dot
        } else {
            const numSlide = +e.target.getAttribute('data-slide-to');
            let top = 170 * numSlide;
            console.log(top);
            wrapper.scrollTo({
                top: top,
                left: 0,
                behavior: 'smooth'
            })
        }
        
    }

    return (
        <div className={"dots-dot " + activeClass} data-slide-to={data} onClick={initialScroll}></div>
    )
}

export default SliderStory;