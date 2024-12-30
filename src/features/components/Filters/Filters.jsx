import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './Filters.scss';

const Filters = () => {
    // получаем фильтры из store
    const filters = useSelector(state => state.reducer.filters);

    // создаем блок с фильтрами
    const filterBlock = filters.map((el, i) => {
        // добавляем класс активности ???? (пока что статичный)
        const activeClass = i === 0 ? 'filter-active' : '';

        return (
            <Filter key={el.id} data={el} activeClass={activeClass}/>
        )
    })

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