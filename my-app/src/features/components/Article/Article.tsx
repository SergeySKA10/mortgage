'use client';

import useGetData from '../../../services/useGetData';

import { useState, useEffect, JSX, MouseEvent } from 'react';
import { sortByDate } from '../../../utils/sortByDate';

import type { ArticlesDB } from '@/shared/shared-components/dataTypesFromSQL';

import ArticleCard from '../ui/ArticleCard/ArticleCard';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';

import './Article.scss';

const Article = () => {
    // делаем запрос для получения данных
    const {
        getData: { data, isError, isPending },
    } = useGetData('articles');

    // // создаем изначальное состояние для статей
    const [articles, setArticles] = useState<(JSX.Element | null)[]>([]);
    // задаем изначальный акивный класс
    const [activeClazz, setActiveClazz] = useState<number>(2);

    //функция изменения активного класса
    const onChangeActive = (
        e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
    ) => {
        if (e.target && (e.target as HTMLElement).getAttribute('data-index')) {
            setActiveClazz(
                +(e.target as HTMLElement).getAttribute('data-index')!
            );
        }
    };

    // добавляем данные в статьи
    useEffect(() => {
        if (data) {
            // сортируем по дате создания
            const sortData = sortByDate(data as ArticlesDB[], 'creation_time');
            setArticles(() =>
                (sortData as ArticlesDB[]).map((el, i) => {
                    // делаем ограничение до 3-х блоков
                    if (i < 3) {
                        // созаем переменную для обозначения большого блока и передачи в props
                        const large = i === 0 ? 'large' : '';

                        return (
                            <ArticleCard
                                key={el.id}
                                data={el as ArticlesDB}
                                index={i}
                                size={large}
                                onChangeActive={onChangeActive}
                            />
                        );
                    } else {
                        return null;
                    }
                })
            );
        }
    }, [data, activeClazz]);

    return (
        <div className="article__education_wrapper">
            {isError ? (
                <ErrorMessage />
            ) : isPending ? (
                <div>Loading...</div>
            ) : (
                articles
            )}
        </div>
    );
};

export default Article;
