import { useQuery } from '@tanstack/react-query';
import {useHttp} from '../../../hooks/http.hook';

import { useState, useEffect } from 'react';
import { sortByDate } from '../../../utils/sortByDate';

import Spinner from '../ui/Spinner/Spinner';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';
import ArticleCard from '../ui/ArticleCard/ArticleCard';

import './Article.scss';

const Article = () => {
    const request = useHttp();
    // получаем из store массив для создания articleBlocks
    const {data, isError, isPending} = useQuery({
        queryKey: ['article'],
        queryFn: () => request({url:'http://localhost:3006/articles'})
    });

    const [articles, setArticles] = useState([]);

    const [activeClazz, setActiveClazz] = useState(2);

    const onChangeActive = (target) => {
        setActiveClazz(+target.getAttribute('data-index'));
    }

    useEffect(() => {
        if (data) {
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
    
    // создаем блок article для Main Page
    const articleBlock = isError ? <ErrorMessage/>
                        : isPending || articles.length === 0  ? <Spinner/>
                        : articles

    return (
        <div className="article__education_wrapper">
            {articleBlock}
        </div>
    )
}

export default Article;