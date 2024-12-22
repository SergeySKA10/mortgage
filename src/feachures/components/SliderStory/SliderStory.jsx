import './SliderStory.scss';
import './DotsSliderStory.scss';

const SliderStory = () => {
    const initialSliderStory = [
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
    ];

    const slides = initialSliderStory.map(el => {
        
    })

    return (
        <div class="story__slider">
            <Dots/>
            <div class="story__slider_wrapper">
                <div class="story__slider_slide">
                    <div class="story__slider_counter roboto-bold">01</div>
                    <div class="story__slider_header roboto-bold">Get positioned</div>
                    <div class="story__slider_line">
                        <hr class="line_dark"/>
                    </div>
                    <div class="story__slider_descr roboto-regular">Structure, pre-approval, gathering, put them into the position get the offer accepted.</div>
                </div>

                <div class="story__slider_slide slide-active">
                    <div class="story__slider_counter  roboto-bold">02</div>
                    <div class="story__slider_header  roboto-bold">Prep the offer</div>
                    <div class="story__slider_line">
                        <hr class="line_dark"/>
                    </div>
                    <div class="story__slider_descr roboto-regular">Terms of your offer, how quickly you can turn things around and who your lenders is advising.</div>
                </div>

                <div class="story__slider_slide">
                    <div class="story__slider_counter roboto-bold">03</div>
                    <div class="story__slider_header roboto-bold">Finalize Closing</div>
                    <div class="story__slider_line">
                        <hr class="line_dark"/>
                    </div>
                    <div class="story__slider_descr roboto-regular">Put the final touches on from contract to close. Close the deal.</div>
                </div>
            </div>

            <div class="story__slider_arrows">
                <button class="btn btn__arrow-left"><div></div></button>
                <button class="btn btn__arrow-right"><div></div></button>
            </div>
        </div>
    )
}

const Dots = () => {
    return (
        <div class="dots">
            <div class="dots-dot"></div>
            <div class="dots-dot dot-active"></div>
            <div class="dots-dot"></div>
        </div>
    )
}

export default SliderStory;