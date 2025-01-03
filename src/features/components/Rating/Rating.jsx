import { useQuery } from '@tanstack/react-query';
import {useHttp} from '../../../hooks/http.hook';

import { Link } from 'react-router-dom';

import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {Line} from '../Line/Line';

import './Rating.scss';

const Rating = () => {
    const request = useHttp();
    // получаем рейтинги для отображения в Main Page
    const {data, isError, isPending} = useQuery({
        queryKey: ['rating'],
        queryFn: () => request('http://localhost:3001/ratings')
    }) 

    // формируем блок с рейтингами
    const ratingBlock = isError ? <ErrorMessage/>
                    : isPending ? <Spinner/>
                    : data.map(el => {
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

    

    // // функция по созданию звезд и заполнения background в соответствии с рейтингом
    // const createStar = (str) => {
    //     const stars = [];
    //     const num = +str.match(/\d(?:\.\d)?/g).join('');
    //     for (let i = 1; i <= 5; i++) {
    //         if (i <= num) {
    //             console.log(num, i);
    //             stars.push(<div style={{background: 'red'}}/>)
    //         } else if (i > num) {
    //             if (num % 1 > 0 && num % 1 < 1) {
    //                 stars.push(<div style={{background: `linear-gradient(90deg, rgba(39,143,180,1) ${num % 1 * 100}%`}}/>)
    //             } else {
    //                 stars.push(<div style={{background: 'linear-gradient(90deg, rgba(39,143,180,1) 0%'}}/>)
    //             }
    //         }
    //     }
    //     return stars;
    // }

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
                    <Link className="roboto-bold" to="#">{reviews}</Link>
                </div>
            </div>
            <div className="line__vertical-mini"></div>
            <div className="customers__block-stars">
                {/* {createStar(stars)} */}
            </div>
        </div> 
    )
}



export default Rating;