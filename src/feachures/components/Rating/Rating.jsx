import './Rating.scss';
import iconGoogle from '../../../assets/icons/main_page/customers/rating/google.png';
import iconZillow from '../../../assets/icons/main_page/customers/rating/zillow.png';

const Rating = () => {
    return (
        <div class="customers__rating">
            <div class="customers__block">
                <div class="customers__block-descr">
                    <div class="customers__block_text roboto-bold">4.5 stars rating</div>
                    <div class="customers__block_img">
                        <img src={iconGoogle} alt="google"/>
                    </div>
                    <div class="customers__block_line">
                        <hr class="line_dark"/>
                    </div>
                    <div class="customers__block_reviews">
                        <p class="roboto-regular">Based on</p>
                        <a class="roboto-bold" href="#">85 reviews</a>
                    </div>
                </div>
                <div class="line__vertical-mini"></div>
                <div class="customers__block-stars">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div class="customers__block">
                <div class="customers__block-descr">
                    <div class="customers__block_text roboto-bold">4 stars rating</div>
                    <div class="customers__block_img">
                        <img src={iconZillow} alt="zillow"/>
                    </div>
                    <div class="customers__block_line">
                        <hr class="line_dark"/>
                    </div>
                    <div class="customers__block_reviews">
                        <p class="roboto-regular">Based on</p>
                        <a class="roboto-bold" href="#">22 reviews</a>
                    </div>
                </div>
                <div class="line__vertical-mini"></div>
                <div class="customers__block-stars">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Rating;