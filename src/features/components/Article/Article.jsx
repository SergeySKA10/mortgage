import { useQuery } from '@tanstack/react-query';
import {useHttp} from '../../../hooks/http.hook';

import { useState, useEffect } from 'react';

import Spinner from '../ui/Spinner/Spinner';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';
import ArticleCard from '../ui/ArticleCard/ArticleCard';

import './Article.scss';

const Article = () => {
    const request = useHttp();
    // получаем из store массив для создания articleBlocks
    const {data, isError, isPending} = useQuery({
        queryKey: ['articleMain'],
        queryFn: () => request({url:'http://localhost:3001/articles'})
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

    // функции для сортировки блоков article по дате:
    const sortByDate = (data) => {
        // функция разделения массивов
        function mergeSort(data) {
            if (data.length < 2) {
                return data;
            } else {
                const middle = Math.floor(data.length / 2);
                const left = data.slice(0, middle);
                const right = data.slice(middle, data.length);
                
                return merge( mergeSort(left), mergeSort(right) );
            }
        }

        // функция по сравнению и формированию массива
        function merge(left, right) {
            const res = [];
            let i = 0;
            let j = 0;

            while (i < left.length && j < right.length) {
                if (Date.parse(left[i].creation_time) > Date.parse(right[j].creation_time)) {
                    res.push(left[i++]);
                } else {
                    res.push(right[j++]);
                }
            }

            return res.concat(left.slice(i), right.slice(j))
        }

        return mergeSort(data);
    }

    
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