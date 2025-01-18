import { useQuery } from '@tanstack/react-query';
import {useHttp} from '../../../../hooks/http.hook';

import { useState, useEffect } from 'react';

import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { ButtonArrow } from '../Buttons/ButtonArrows';
import {Line} from '../Line/Line';

import './SliderReviews.scss';
import rightQuote from '../../../../assets/icons/main_page/quote/right-quote.svg';

const SliderReviews = () => {
    const request = useHttp();
    
    // получаем слайды
    const {data, isError, isPending} = useQuery({
        queryKey: ['slidesReviews'],
        queryFn: () => request({url: 'http://localhost:3001/slidesReviews'})
    });

    // создаем state для индекса слайдера
    const [indexSlide, setIndexSlide] = useState(1);

    //state для отслеживания состояния кнопок и точек для переключения слайдов
    const [pressButton, setPressButton] = useState(false);

    // создаем state для расчета offset
    const [offset, setOffset] = useState(0);

    // создаем state для получения ширины слайда
    const [width, setWidth] = useState(0);

    // создаем state для max значения offset
    const [maxOffset, setMaxOffset] = useState(0);

    // создаем state для получения элемента обертки слайдов
    const [wrapperSlides, setWrapperSlides] = useState(null);

    // state для получаем 1-ый слайд
    const [slide, setSlide] = useState(null);

    // создаем state для total 
    const [total, setTotal] = useState(0);

    // создаем state для dots
    const [dots, setDots] = useState([])

    // функция преобразования строки в число
    function stringToDigits(str) {
        return +str.replace(/\D/g, '');
    }

    // получаем ширину слайда и обертку и устанавливаем max значение offset
    useEffect(() => {
        setSlide(document.querySelector('.customers__slide'));
        setWrapperSlides(document.querySelector('.customers__slides'));
        if (slide) {
            setWidth(stringToDigits(window.getComputedStyle(slide).width) + 24);
        }
        setMaxOffset(width * (data?.length - 1));
    }, [slide, wrapperSlides, data, width]);


    // установка total  
    useEffect(() => {
        setTotal(data?.length < 10 ? `0${data?.length}` : data?.length)
    }, [data]);

    // переменная для рендера состояния запроса данных
    const slidesBlock = isError ? <ErrorMessage/>
                    : isPending ? <Spinner/>
                    : data?.map((el) => {
                        return (
                            <SlideReviews key={el.id} data={el}/>
                        )
                    });

    
    // функция переключения слайдера на другой слайд
    const showNewSlide = () => {
        if (wrapperSlides) {
            wrapperSlides.style.transform = `translateX(-${offset}px)`;
        }
    }

    // переход на слайд при взаимодействии с dots или стрелками
    useEffect(() => {
        showNewSlide();
    }, [offset, pressButton]);

    // формирование точек
    useEffect(() => {
        if (data) {
            setDots(dots =>  data.map((el, i) => {
                    const activeClass = i === indexSlide - 1 ? 'dot-active-white' : '';
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
                    )
                })
            )
        }
    }, [data, width, indexSlide])

    return (
        <div className="customers__slider">
            <div className="customers__slider_counter">
                <div className="customers__slider_current">
                    <span id="current-customers" className="roboto-bold">{indexSlide < 10 ? `0${indexSlide}` : indexSlide}</span>
                    <span id="total-customers" className="roboto-bold">/{total}</span>
                </div>
                <div className="customers__slider_arrows">
                    <ButtonArrow 
                        type='left' 
                        data='prev'
                        offset={offset}
                        setOffset={setOffset} 
                        maxOffset={maxOffset}
                        setIndexSlide={setIndexSlide}
                        width={width}
                        setPressButton={setPressButton}
                        indexSlide={indexSlide}
                        />
                    <ButtonArrow 
                        type='right' 
                        data='next'
                        offset={offset}
                        setOffset={setOffset}
                        setIndexSlide={setIndexSlide}
                        indexSlide={indexSlide} 
                        maxOffset={maxOffset}
                        width={width}
                        setPressButton={setPressButton}/>
                </div>
            </div>
        
            <div className="customers__slider_inner">
                <div className="customers__slides">
                    {slidesBlock}
                </div>
        
                <div className="customers__slider_dots">
                    {dots}
                </div>
            </div>
        </div>
    )
}

const SlideReviews = ({data}) => {
    const {photo, city, name, profession, icon, review} = data;

    return (
        <div className="customers__slide">
            <div className="customers__slide-profile">
                <div className="customers__slide-photo">
                    <img src={photo} alt="photo"/>
                </div>
                <div className="customers__slide-info">
                    <div className="customers__slide-city roboto-bold">{city}</div>
                    <div className="customers__slide-name roboto-bold">{name}</div>
                    <div className="customers__slide-proff roboto-regular">{profession}</div>
                </div>
                <div className="customers__slide-social">
                    <img src={icon} alt="social"/>
                </div>
            </div>
            <div className="customers__slide_line">
                <Line/>
            </div>
            <div className="customers__slide-descr">
                <div className="customers__slide-quote">
                    <img src={rightQuote} alt="quote"/>
                </div>
                <p className="customers__slide-text roboto-regular">
                    {review}
                </p>
            </div>
        </div>
    )
}

const Dot = ({activeClass, data, width, setOffset, setIndexSlide, setPressDot}) => {
    // функция установки offset и indexSlide при клике на dots
    const initialOffset = (target) => {
        const numSlide = +target.getAttribute('data-slide-to');
        setOffset(width * numSlide);
        setIndexSlide(numSlide + 1);
        setPressDot(true); // отслеживание нажатия на dot
    }

   return (
        <div className={'customers__slider_dot ' + activeClass} data-slide-to={data} onClick={(e) => initialOffset(e.target)}></div>
   ) 
}

export default SliderReviews;