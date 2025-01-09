import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { ButtonArrow } from '../Buttons/Buttons';
import {Line} from '../Line/Line';

import './SliderStory.scss';
import './DotsSliderStory.scss';

const SliderStory = () => {
    // получем слайды из store 
    const slides = useSelector(state => state.sliderStory.slidesStory);

    // создаем state для индекса слайдера
    const [indexSlide, setIndexSlide] = useState(2);

    // создаем state для расчета offset
    const [offset, setOffset] = useState(-234);

    // создаем state для постоянного шага offset
    const [width, setWidth] = useState(234);

    // создаем state для max значения offset
    const [maxOffset, setMaxOffset] = useState((slides.length - 1) * width);

    // создаем state для получения элемента обертки слайдов
    const [wrapperSlides, setWrapperSlides] = useState(null);

    // создаем state для dots
    const [dots, setDots] = useState([]);

    // создаем state для slidesBlock
    const [slidesBlock, setSlidesBlock] = useState([]);

    //state для отслеживания состояния кнопок и точек для переключения слайдов
    const [pressButton, setPressButton] = useState(false);

    // получаем элемент обертки слайдов
    useEffect(() => {
        setWrapperSlides(document.querySelector('.story__slider_inner'))
    }, [])

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

    // формируем dots
    useEffect(() => {
        if (slides) {
            setDots(dots => slides.map((el, i) => {
                    // console.log(offset, maxOffset)
                    const activeClass = i === indexSlide - 1 ? 'dot-active' : '';
                    return (
                        <Dot 
                            key={i} 
                            data={i}
                            activeClass={activeClass}
                            setIndexSlide={setIndexSlide}
                            setOffset={setOffset}
                            setPressButton={setPressButton}
                            width={width}
                        />
                    )
                })
            )
        }
    }, [slides, indexSlide]);

    // функция по изменению offset в зависимости от scroll 
    const onScrollChangeOffset = (target) => {
        // window.scrollTo(1500)
        if (target > 0) {
            if (offset === maxOffset) {
                setOffset(0);
            } else {
                setOffset(offset => offset + width);
            }

            if (indexSlide === maxOffset / width + 1) {
                setIndexSlide(1);
            } else {
                setIndexSlide(indexSlide => indexSlide + 1);
            }
        }

        if (target < 0) {
            if (offset === 0) {
                setOffset(maxOffset);
            } else {
                setOffset(offset => offset - width);
            }

            if (indexSlide === 1) {
                setIndexSlide(maxOffset / width + 1);
            } else {
                setIndexSlide(indexSlide => indexSlide - 1);
            }
        }
    }

    // эффект показа нового слайда
    useEffect(() => {
        if (wrapperSlides) {
            if (offset === 0) {
                wrapperSlides.style.transform = `translateY(234px)`;
            } else {
                wrapperSlides.style.transform = `translateY(-${offset - 234}px)`;
            }
        }
    }, [offset])


    return (
        <div className="story__slider">
            <div className="dots">
                {dots}
            </div>
            <div className="story__slider_wrapper">
                <div className="story__slider_inner" onWheel={(e) => {
                        // e.preventDefault();
                        // onScrollChangeOffset(e.deltaY)
                    }}>
                    {slidesBlock}
                </div>
            </div>

            <div className="story__slider_arrows">
                <ButtonArrow type='left'/>
                <ButtonArrow type='right'/>
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

const Dot = ({data, activeClass, setIndexSlide, setOffset, setPressButton, width}) => {
    // функция установки offset и indexSlide при клике на dots
    const initialOffset = (target) => {
        const numSlide = +target.getAttribute('data-slide-to');
        setOffset(width * numSlide);
        setIndexSlide(numSlide + 1);
        setPressButton(true); // отслеживание нажатия на dot
    }

    return (
        <div className={"dots-dot " + activeClass} data-slide-to={data} onClick={(e) => initialOffset(e.target)}></div>
    )
}

export default SliderStory;