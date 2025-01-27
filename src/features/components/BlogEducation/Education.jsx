import useGetData from '../../../services/useGetData';
import setContent from '../../../utils/setContent';

import { useState, useEffect } from 'react';
import { sortByDate } from '../../../utils/sortByDate';

import ArticleCard from '../ui/ArticleCard/ArticleCard';

import './Education.scss';
import './EducationMedia.scss';

const Education = () => {
    // делаем запрос для получения данных
    const {process, getData: {data, isError, isPending}} = useGetData('articles', 6);

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

    return (
        <section class="blog_education">
            <div class="container">
                <h2 class="header__h2-left roboto-bold">Education</h2>
                <div class="blog_education__wrapper">
                    {setContent({process, isError, isPending, Components: articles})}
                </div>
            </div>
        </section>
    )
}

export default Education;