import { useSelector } from 'react-redux';

import './Rating.scss';


const Rating = () => {
    // получаем рейтинги для отображения в Main Page
    const ratings = useSelector(state => state.reducer.ratings)

    // формируем блок с рейтингами
    const ratingBlock = ratings.map(el => {
        return (
            <ViewBlock data={el}/>
        )
    });

    return (
        <div className="customers__rating">
            {ratingBlock}
        </div>
    )
}

const ViewBlock = ({data}) => {
    const {id, stars, icon, reviews} = data;
    return (
        <div key={id} className="customers__block">
            <div className="customers__block-descr">
                <div className="customers__block_text roboto-bold">{stars}</div>
                <div className="customers__block_img">
                    <img src={icon} alt="google"/>
                </div>
                <div className="customers__block_line">
                    <hr className="line_dark"/>
                </div>
                <div className="customers__block_reviews">
                    <p className="roboto-regular">Based on</p>
                    <a className="roboto-bold" href="#">{reviews}</a>
                </div>
            </div>
            <div className="line__vertical-mini"></div>
            <div className="customers__block-stars">
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