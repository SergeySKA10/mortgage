import { useSelector } from 'react-redux';

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
        <a className={`article__filter roboto-bold ${props.activeClass}`}>{name}</a> 
    )
}

export default Filters;