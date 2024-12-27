import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import {Line} from '../Line/Line';

import './Rating.scss';


const Rating = () => {
    // получаем рейтинги для отображения в Main Page
    const ratings = useSelector(state => state.reducer.ratings)

    // формируем блок с рейтингами
    const ratingBlock = ratings.map(el => {
        return (
            <ViewBlock key={el.id} data={el}/>
        )
    });

    return (
        <div className="customers__rating">
            {ratingBlock}
        </div>
    )
}

const ViewBlock = ({data}) => {
    const {stars, icon, reviews} = data;

    // const starsBlock = [];

    // // функция по созданию звезд и заполнения background в соответствии с рейтингом
    // const createStar = (str) => {
    //     const num = +str.match(/\d(?:\.\d)?/g).join('');

    //     for (let i = 1; i <= 5; i++) {
    //         if (i <= num) {
    //             console.log(num);
    //             starsBlock.push(<div key={i} style={{backgroundColor: 'linear-gradient(90deg, rgba(39,143,180,1) 100%, rgba(255,255,255,1) 0%'}}/>)
    //         } else if (i > num) {
    //             if (num % 1 > 0 && num % 1 < 1) {
    //                 starsBlock.push(<div key={i} style={{backgroundColor: `linear-gradient(90deg, rgba(39,143,180,1) ${num % 1 * 100}%`}}/>)
    //             } else {
    //                 starsBlock.push(<div key={i} style={{backgroundColor: 'linear-gradient(90deg, rgba(39,143,180,1) 0%'}}/>)
    //             }
    //         }
    //     }
    // }

    // createStar(stars);

    return (
        <div className="customers__block">
            <div className="customers__block-descr">
                <div className="customers__block_text roboto-bold">{stars}</div>
                <div className="customers__block_img">
                    <img src={icon} alt="google"/>
                </div>
                <div className="customers__block_line">
                    <Line/>
                </div>
                <div className="customers__block_reviews">
                    <p className="roboto-regular">Based on</p>
                    <a className="roboto-bold" href="#">{reviews}</a>
                </div>
            </div>
            <div className="line__vertical-mini"></div>
            <div className="customers__block-stars">
                {/* {starsBlock} */}
            </div>
        </div> 
    )
}



export default Rating;