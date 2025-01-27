import useGetData from '../../../services/useGetData';
import setContent from '../../../utils/setContent';

import { useState, useEffect } from 'react';

import RatingCard from '../ui/RatingCard/RatingCard';

import './Rating.scss';

const Rating = () => {

    // делаем запрос для получения данных
    const {process, getData: {data, isError, isPending}} = useGetData('ratings', 3);

    // создаем изначальное состояние для сблоков рейтинга 
    const [ratings, setRatings] = useState([]);

    // заполняем блоки рейтингов полученными данными
    useEffect(() => {
        if (data) {
            setRatings(ratings => data.map(el => {
                return (
                    <RatingCard key={el.id} data={el}/>
                )
            }))
        }
    }, [data])

    return (
        <div className="customers__rating">
            {setContent({process, isError, isPending, Components: ratings})}
        </div>
    )
}

export default Rating;