import { useSelector } from 'react-redux';

import { ButtonArrow } from '../Buttons/Buttons';
import {Line} from '../Line/Line';

import './SliderStory.scss';
import './DotsSliderStory.scss';

const SliderStory = () => {
    // получем слайды из store 
    const slides = useSelector(state => state.reducer.slidesStory);

    // создаем массив для формирования точек
    const dots = [];

    const slidesBlock = slides.map((el, i) => {
        // задаем классы активости (пока статично)
        const activeClassSlide = i === 1 ? 'slide-active' : '';
        const activeClassDots =  i === 1 ? 'dot-active' : '';

        //задаем current для слайда
        const current = i < 10 ? `0${i}` : i;

        // добавляем точки в массив
        dots.push(<Dot key={i} activeClass={activeClassDots}/>)

        return (
            <Slide data={el} activeClass={activeClassSlide} current={current}/>
        )
    })

    return (
        <div className="story__slider">
            <div className="dots">
                {dots}
            </div>
            <div className="story__slider_wrapper">
                {slidesBlock}
            </div>

            <div className="story__slider_arrows">
                <ButtonArrow type='left'/>
                <ButtonArrow type='right'/>
            </div>
        </div>
    )
}

const Slide = ({data, activeClass, current}) => {
    const {id, header, descr} = data;
    return (
        <div key={id} className={'story__slider_slide ' + activeClass}>
            <div className="story__slider_counter roboto-bold">{current}</div>
            <div className="story__slider_header roboto-bold">{header}</div>
            <div className="story__slider_line">
                <Line/>
            </div>
            <div className="story__slider_descr roboto-regular">{descr}</div>
        </div>
    )
}

const Dot = (props) => {
    const {activeClass} = props;

    return (
        <div className={"dots-dot " + activeClass}></div>
    )
}

export default SliderStory;