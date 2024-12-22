import './SliderReviews.scss';
import photoEmely from '../../../assets/img/main_page/customers/Emily.png';
import photoMichael from '../../../assets/img/main_page/customers/Michael.png';
import iconGoogle from '../../../assets/icons/main_page/customers/G.svg';
import rightQuote from '../../../assets/icons/main_page/quote/right-quote.svg';

const SliderReviews = () => {
    return (
        <div class="customers__slider">
            <div class="customers__slider_counter">
                <div class="customers__slider_current">
                    <span id="current-customers" class="roboto-bold">01</span>
                    <span id="total-customers" class="roboto-bold">/10</span>
                </div>
                <div class="customers__slider_arrows">
                    <button class="btn btn__arrow-left"><div></div></button>
                    <button class="btn btn__arrow-right"><div></div></button>
                </div>
            </div>
        
            <div class="customers__slider_inner">
                <div class="customers__slides">
                    <div class="customers__slide">
                        <div class="customers__slide-profile">
                            <div class="customers__slide-photo">
                                <img src={photoEmely} alt="photo"/>
                            </div>
                            <div class="customers__slide-info">
                                <div class="customers__slide-city roboto-bold">New York</div>
                                <div class="customers__slide-name roboto-bold">Emily Pearson</div>
                                <div class="customers__slide-proff roboto-regular">Engeneer</div>
                            </div>
                            <div class="customers__slide-social">
                                <img src={iconGoogle} alt="social"/>
                            </div>
                        </div>
                        <div class="customers__slide_line">
                            <hr class="line_dark"/>
                        </div>
                        <div class="customers__slide-descr">
                            <div class="customers__slide-quote">
                                <img src={rightQuote} alt="quote"/>
                            </div>
                            <p class="customers__slide-text roboto-regular">
                                Terms of your offer, how quickly you can turn things around and who your lenders is. advising, calling listing agents, 
                                to get your deal done, Offer-Stage advising, calling listing agents, to get your deal done.
                            </p>
                        </div>
                    </div>

                    <div class="customers__slide">
                        <div class="customers__slide-profile">
                            <div class="customers__slide-photo">
                                <img src={photoMichael} alt="photo"/>
                            </div>
                            <div class="customers__slide-info">
                                <div class="customers__slide-city roboto-bold">Los angeles</div>
                                <div class="customers__slide-name roboto-bold">Michael Bronson</div>
                                <div class="customers__slide-proff roboto-regular">Product designer</div>
                            </div>
                            <div class="customers__slide-social">
                                <img src={iconGoogle} alt="social"/>
                            </div>
                        </div>
                        <div class="customers__slide_line">
                            <hr class="line_dark"/>
                        </div>
                        <div class="customers__slide-descr">
                            <div class="customers__slide-quote">
                                <img src={rightQuote} alt="quote"/>
                            </div>
                            <p class="customers__slide-text roboto-regular">
                                Terms of your offer, how quickly you can turn things around and who your lenders is. advising, calling listing agents, 
                                to get your deal done, Offer-Stage advising, calling listing agents, to get your deal done.
                            </p>
                        </div>
                    </div>
                </div>
        
                <div class="customers__slider_dots">
                    <div class="customers__slider_dot dot-active-white"></div>
                    <div class="customers__slider_dot"></div>
                    <div class="customers__slider_dot"></div>
                    <div class="customers__slider_dot"></div>
                    <div class="customers__slider_dot"></div>
                    <div class="customers__slider_dot"></div>
                    <div class="customers__slider_dot"></div>
                    <div class="customers__slider_dot"></div>
                    <div class="customers__slider_dot"></div>
                    <div class="customers__slider_dot"></div>
                </div>
            </div>
        </div>
    )
}

export default SliderReviews;