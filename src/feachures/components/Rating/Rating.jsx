import './Rating.scss';
import iconGoogle from '../../../assets/icons/main_page/customers/rating/google.png';
import iconZillow from '../../../assets/icons/main_page/customers/rating/zillow.png';

const Rating = () => {
    const initialState = {
        ratings: [
            {
                stars: '4.5 stars rating',
                icon: iconGoogle,
                reviews: '85 reviews'
            },
            {
                stars: '4 stars rating',
                icon: iconZillow,
                reviews: '22 reviews'
            }
        ]
    }

    const ratingBlocks = initialState.ratings.map(el => {
        return (
            <ViewBlock 
                stars={el.stars}
                icon={el.icon}
                reviews={el.reviews}
            />
        )
    });

    return (
        <div class="customers__rating">
            {ratingBlocks}
        </div>
    )
}

const ViewBlock = (props) => {
    const {stars, icon, reviews} = props;
    return (
        <div class="customers__block">
            <div class="customers__block-descr">
                <div class="customers__block_text roboto-bold">{stars}</div>
                <div class="customers__block_img">
                    <img src={icon} alt="google"/>
                </div>
                <div class="customers__block_line">
                    <hr class="line_dark"/>
                </div>
                <div class="customers__block_reviews">
                    <p class="roboto-regular">Based on</p>
                    <a class="roboto-bold" href="#">{reviews}</a>
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
    )
}



export default Rating;