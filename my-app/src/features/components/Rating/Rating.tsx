'use client';

import useGetData from '../../../services/useGetData';
import setContent from '../../../utils/setContent';

import RatingCard from '../ui/RatingCard/RatingCard';

import './Rating.scss';

const Rating = () => {
    // делаем запрос для получения данных
    const {
        process,
        getData: { data, isError, isPending },
    } = useGetData('ratings');

    return (
        <div className="customers__rating">
            {setContent({
                process,
                isError,
                isPending,
                data: data,
                Component: RatingCard,
            })}
        </div>
    );
};

export default Rating;
