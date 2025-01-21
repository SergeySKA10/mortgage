import { useQuery } from '@tanstack/react-query';
import {useHttp} from '../../../hooks/http.hook';

import { useState, useEffect } from 'react';
import { sortByDate } from '../../../utils/sortByDate';

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
    
    // создаем блок article
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