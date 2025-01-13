import { useQuery } from '@tanstack/react-query';
import {useHttp} from '../../../hooks/http.hook';
import { NavLink } from 'react-router-dom';

import { useState, useEffect } from 'react';

import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {Line} from '../Line/Line';

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
                        <ViewBlock
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

const ViewBlock = ({data, size, active, index, onChangeActive}) => {
    const {link, subheader, header, descr, avatar, nameSpeaker} = data;

    // стили для большего активного блока
    const style = size && active ? {background: "#278FB4"} : null;

    return (
        <NavLink 
            to={link} 
            className={`article__block ${active}`} 
            data-size={size} 
            data-index={index}
            style={style}
            onClick={(e) => onChangeActive(e.target)}
            >
            <div className="article__logo roboto-bold">{subheader}</div>
            <h4 className="header__h4 roboto-bold">{header}</h4>
            <div className="article__descr roboto-regular">{descr}</div>
            <div className="article__education__line">
                <Line/>
            </div>
            <div className="article__by">
                <div className="article__by_photo">
                    <img src={avatar} alt="photo"/>
                </div>
                <div className="article__by_name roboto-regular">
                    by
                    <div className="roboto-bold">{nameSpeaker}</div>
                </div>
            </div>
        </NavLink>
    )
}

export default Article;