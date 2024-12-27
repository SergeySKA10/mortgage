import { useState } from 'react';
import { useSelector } from 'react-redux';

import { ButtonArrow } from '../Buttons/Buttons';
import {Line} from '../Line/Line';

import './SliderReviews.scss';
import rightQuote from '../../../assets/icons/main_page/quote/right-quote.svg';

const SliderReviews = () => {
    // получаем слайды
    const slides = useSelector(state => state.reducer.slidesReviews);

    // создаем state для индекса слайдера
    const [indexSlide, setIndexSlide] = useState(1);
    // создаем state для current
    const [current, setCurrent] = useState(indexSlide < 10 ? `0${indexSlide}` : indexSlide);
    // создаем state для total 
    const [total, setTotal] = useState(slides.length < 10 ? `0${slides.length}` : slides.length)
    // создаем массив для формирования точек
    const dots = [];

    const slidesBlock = slides.map((el, i) => {
        // добавляем класс активности ???? (пока что статичный)
        const activeClassDot = i === 0 ? 'dot-active-white' : ''

        // добавляем точки в массив
        dots.push(<Dot key={i} activeClass={activeClassDot}/>)

        return (
            <SlideReviews key={el.id} data={el}/>
        )
    })

    return (
        <div className="customers__slider">
            <div className="customers__slider_counter">
                <div className="customers__slider_current">
                    <span id="current-customers" className="roboto-bold">{current}</span>
                    <span id="total-customers" className="roboto-bold">/{total}</span>
                </div>
                <div className="customers__slider_arrows">
                    <ButtonArrow type='left'/>
                    <ButtonArrow type='right'/>
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

const Dot = (props) => {
   return (
        <div className={'customers__slider_dot ' + props.activeClass}></div>
   ) 
}

export default SliderReviews;