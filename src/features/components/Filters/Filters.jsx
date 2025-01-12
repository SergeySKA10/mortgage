import { useQuery } from '@tanstack/react-query';
import {useHttp} from '../../../hooks/http.hook';

import { NavLink } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import './Filters.scss';

const Filters = () => {
    const request = useHttp();
    // получаем фильтры из store
    const {data, isError, isPending} = useQuery({
        queryKey: ['filters'],
        queryFn: () => request({url: 'http://localhost:3001/filters'})
    });

    // создаем блок с фильтрами
    const filterBlock = isError ? <ErrorMessage/>
                    : isPending ? <Spinner/>
                    : data.map((el, i) => {
                        // добавляем класс активности ???? (пока что статичный)
                        const activeClass = i === 0 ? 'filter-active' : '';

                        return (
                            <Filter key={el.id} data={el} activeClass={activeClass}/>
                        )
                    });

    return (
        <div className="article__filters">
            {filterBlock}
        </div>
    )
}

const Filter = (props) => {
    const {name} = props.data;
    return (
        <NavLink className={`article__filter roboto-bold ${props.activeClass}`}>{name}</NavLink> 
    )
}

export default Filters;