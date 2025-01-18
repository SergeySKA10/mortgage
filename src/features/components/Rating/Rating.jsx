import { useQuery } from '@tanstack/react-query';
import {useHttp} from '../../../hooks/http.hook';

import Spinner from '../ui/Spinner/Spinner';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';
import RatingCard from '../ui/RatingCard/RatingCard';

import './Rating.scss';

const Rating = () => {
    const request = useHttp();
    // получаем рейтинги для отображения в Main Page
    const {data, isError, isPending} = useQuery({
        queryKey: ['rating'],
        queryFn: () => request({url: 'http://localhost:3001/ratings'})
    }) 

    // формируем блок с рейтингами
    const ratingBlock = isError ? <ErrorMessage/>
                    : isPending ? <Spinner/>
                    : data.map(el => {
                        return (
                            <RatingCard key={el.id} data={el}/>
                        )
                    });

    return (
        <div className="customers__rating">
            {ratingBlock}
        </div>
    )
}

export default Rating;