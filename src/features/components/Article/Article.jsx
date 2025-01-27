import useGetData from '../../../services/useGetData';
import setContent from '../../../utils/setContent';

import { useState, useEffect } from 'react';
import { sortByDate } from '../../../utils/sortByDate';

import ArticleCard from '../ui/ArticleCard/ArticleCard';

import './Article.scss';

const Article = () => {
    // делаем запрос для получения данных
    const {process, getData: {data, isError, isPending}} = useGetData('articles', 6);

    // создаем изначальное состояние для статей 
    const [articles, setArticles] = useState([]);
    // задаем изначальный акивный класс
    const [activeClazz, setActiveClazz] = useState(2);

    //функция изменения активного класса
    const onChangeActive = (target) => {
        setActiveClazz(+target.getAttribute('data-index'));
    }

    // добавляем данные в статьи
    useEffect(() => {
        if (data) {
            // сортируем по дате создания
            const sortData = sortByDate(data);
            setArticles(articles => sortData.map((el, i) => {
                // делаем ограничение до 3-х блоков
                if (i < 3) {
                    // созаем переменную для обозначения большого блока и передачи в props
                    const large = i === 0 ? 'large' : '';
                    // задаем класс активости
                    const active = i === activeClazz ? 'article-active' : '';
                    return (
                        <ArticleCard
                            key={el.id}
                            data={el}
                            index={i}
                            size={large}
                            active={active}
                            onChangeActive={onChangeActive}
                        />
                    )
                } else {
                    return null;
                }
            }));
        }
    }, [data, activeClazz]);

    return (
        <div className="article__education_wrapper">
            {setContent({process, isError, isPending, Components: articles})}
        </div>
    )
}

export default Article;