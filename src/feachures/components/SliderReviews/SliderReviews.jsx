import './SliderReviews.scss';
import photoEmely from '../../../assets/img/main_page/customers/Emily.png';
import photoMichael from '../../../assets/img/main_page/customers/Michael.png';
import iconGoogle from '../../../assets/icons/main_page/customers/G.svg';
import rightQuote from '../../../assets/icons/main_page/quote/right-quote.svg';

const SliderReviews = () => {
    const initialState = {
        slidesReviews: [
            {
                photo: photoEmely,
                city: 'New York',
                name: 'Emily Pearson',
                profession: 'Engeneer',
                icon: iconGoogle,
                review: 'Terms of your offer, how quickly you can turn things around and who your lenders is. advising, calling listing agents, to get your deal done, Offer-Stage advising, calling listing agents, to get your deal done.'
            },
            {
                photo: photoMichael,
                city: 'Los angeles',
                name: 'Michael Bronson',
                profession: 'Product designe',
                icon: iconGoogle,
                review: 'Terms of your offer, how quickly you can turn things around and who your lenders is. advising, calling listing agents, to get your deal done, Offer-Stage advising, calling listing agents, to get your deal done.'
            }
        ]
    }

    const indexSlideReviews = 1;
    const current = indexSlideReviews < 10 ? `0${indexSlideReviews}` : indexSlideReviews;
    const total = initialState.slidesReviews.length < 10 ? `0${initialState.slidesReviews.length}` : initialState.slidesReviews.length;
    const dots = [];

    const slides = initialState.slidesReviews.map((el, i) => {
        const {photo, city, name, profession, icon, review} = el;
        const activeClassDot = i === 0 ? 'dot-active-white' : ''

        dots.push(<Dot activeClass={activeClassDot}/>)

        return (
            <SlideReviews
                photo={photo}
                city={city}
                name={name}
                profession={profession}
                icon={icon}
                review={review}
            />
        )
    })

    return (
        <div class="customers__slider">
            <div class="customers__slider_counter">
                <div class="customers__slider_current">
                    <span id="current-customers" class="roboto-bold">{current}</span>
                    <span id="total-customers" class="roboto-bold">/{total}</span>
                </div>
                <div class="customers__slider_arrows">
                    <button class="btn btn__arrow-left"><div></div></button>
                    <button class="btn btn__arrow-right"><div></div></button>
                </div>
            </div>
        
            <div class="customers__slider_inner">
                <div class="customers__slides">
                    {slides}
                </div>
        
                <div class="customers__slider_dots">
                    {dots}
                </div>
            </div>
        </div>
    )
}

const SlideReviews = (props) => {
    const {photo, city, name, profession, icon, review} = props;

    return (
        <div class="customers__slide">
            <div class="customers__slide-profile">
                <div class="customers__slide-photo">
                    <img src={photo} alt="photo"/>
                </div>
                <div class="customers__slide-info">
                    <div class="customers__slide-city roboto-bold">{city}</div>
                    <div class="customers__slide-name roboto-bold">{name}</div>
                    <div class="customers__slide-proff roboto-regular">{profession}</div>
                </div>
                <div class="customers__slide-social">
                    <img src={icon} alt="social"/>
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
                    {review}
                </p>
            </div>
        </div>
    )
}

const Dot = (props) => {
   return (
        <div class={'customers__slider_dot ' + props.activeClass}></div>
   ) 
}

export default SliderReviews;