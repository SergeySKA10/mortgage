import './SliderStory.scss';
import './DotsSliderStory.scss';

const SliderStory = () => {
    const initialState = {
        slidesStory: [
            {
                header: 'Get positioned',
                descr: 'Structure, pre-approval, gathering, put them into the position get the offer accepted.'
            },
            {
                header: 'Prep the offer',
                descr: 'Terms of your offer, how quickly you can turn things around and who your lenders is advising.'  
            },
            {
                header: 'Finalize Closing',
                descr: 'Put the final touches on from contract to close. Close the deal.'  
            }
        ]
    };

    const dots = [];

    const slides = initialState.slidesStory.map((el, i) => {
        const activeClassSlide = i === 1 ? 'slide-active' : '';
        const activeClassDots =  i === 1 ? 'dot-active' : '';

        dots.push(<Dot activeClass={activeClassDots}/>)

        return (
            <div class={'story__slider_slide ' + activeClassSlide}>
                <div class="story__slider_counter roboto-bold">{`0${i+1}`}</div>
                <div class="story__slider_header roboto-bold">{el.header}</div>
                <div class="story__slider_line">
                    <hr class="line_dark"/>
                </div>
                <div class="story__slider_descr roboto-regular">{el.descr}</div>
            </div>
        )
    })

    return (
        <div class="story__slider">
            <div class="dots">
                {dots}
            </div>
            <div class="story__slider_wrapper">
                {slides}
            </div>

            <div class="story__slider_arrows">
                <button class="btn btn__arrow-left"><div></div></button>
                <button class="btn btn__arrow-right"><div></div></button>
            </div>
        </div>
    )
}

const Dot = (props) => {
    const {activeClass} = props;

    return (
        <div class={"dots-dot " + activeClass}></div>
    )
}

export default SliderStory;