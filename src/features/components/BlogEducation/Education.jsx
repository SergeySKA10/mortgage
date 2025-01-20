import { useQuery } from '@tanstack/react-query';
import {useHttp} from '../../../hooks/http.hook';

import { useState, useEffect } from 'react';

import Spinner from '../ui/Spinner/Spinner';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';
import ArticleCard from '../ui/ArticleCard/ArticleCard';

import './Education.scss';
import './EducationMedia.scss';

const Education = () => {
    const request = useHttp();

    // получаем данные из бд
    const {data, isPending, isError} = useQuery({
        queryKey: ['article'],
        queryFn: () => request({url:'http://localhost:3006/articles'}) 
    });

    const [articles, setArticles] = useState([]);

    const [activeClazz, setActiveClazz] = useState(1);

    const onChangeActive = (target) => {
        setActiveClazz(+target.getAttribute('data-index'));
    }

    useEffect(() => {
        if (data) {
            const sortData = sortByDate(data);
            setArticles(articles => sortData.map((el, i) => {
                const large = i === 0 ? 'large' : i === 6 ?  'large-right' : '';
                let order;

                switch (i) {
                    case 1:
                        order = {order: "3"};
                        break;
                    case 2: 
                        order = {order: "4"};
                        break;
                    case 3:
                        order = {order: "2"};
                        break;
                    default:
                        order = {order: `${i+ 1}`}
                }

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
                        order={order}
                    />
                )
            }));
        }
    }, [data, activeClazz]);

    // функции для сортировки по дате:
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
        <section class="blog_education">
            <div class="container">
                <h2 class="header__h2-left roboto-bold">Education</h2>
                <div class="blog_education__wrapper">
                    {articleBlock}
                </div>
            </div>
        </section>
    )
}

export default Education;