import useGetData from '../../../../services/useGetData';
import setContent from '../../../../utils/setContent';

import { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import './Filters.scss';

const Filters = () => {
     // делаем запрос для получения данных
     const {process, getData: {data, isError, isPending}} = useGetData('filters', 5);

     // стейт для фильтров
     const [filters, setFilters] = useState([]);

    // создаем блок с фильтрами
    useEffect(() => {
        if (data) {
            setFilters(filters => data.map((el, i) => {
                // добавляем класс активности ???? (пока что статичный)
                const activeClass = i === 0 ? 'filter-active' : '';

                return (
                    <Filter key={el.id} data={el} activeClass={activeClass}/>
                )
            }))
        }
    }, [data])

    return (
        <div className="article__filters">
            {setContent({process, isError, isPending, Components: filters})}
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