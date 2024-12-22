import Rating from '../Rating/Rating';
import SliderReviews from '../SliderReviews/SliderReviews';

import './CustomersBlock.scss';
import './CustomersBlockMedia.scss';

const CustomersBlock = () => {
    return (
        <section class="customers">
            <h2 class="header__h2-left roboto-bold">What our customers say</h2>
            <h3 class="header__h3-left roboto-regular">Truly reviews from our clients</h3>

            <div class="customers__wrapper"> 
                <Rating/>
                <SliderReviews/>
            </div>
        </section>
    )
}

export default CustomersBlock;