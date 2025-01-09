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
        queryFn: () => request('http://localhost:3001/articles')
    });

    const [articles, setArticles] = useState([]);

    const [activeClazz, setActiveClazz] = useState(2);

    const onChangeActive = (target) => {
        setActiveClazz(+target.getAttribute('data-index'));
    }

    useEffect(() => {
        if (data) {
            setArticles(articles => data.map((el, i) => {
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
    }, [data, activeClazz])

    
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
    const large = size;

    return (
        <NavLink 
            to={link} 
            className={`article__block ${active}`} 
            data-size={large} 
            data-index={index}
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