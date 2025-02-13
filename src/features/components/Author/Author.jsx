import useGetData from '../../../services/useGetData';
import setContent from '../../../utils/setContent';

import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AuthorCard from '../ui/AuthorCard/AuthorCard';

import './Author.scss';
import './AuthorMedia.scss';

const Author = () => {
    // делаем запрос для получения данных
    const {process, getData: {data, isError, isPending}} = useGetData('mentors', 1);

    // создаем изначальное состояние для карточки автора книги 
    const [authorBook, setAuthorBook] = useState([]);

    // создаем изначальное состояние для карточки автора книги 
    const [authorWebinar, setAuthorWebinar] = useState([]);

    // получаем локацию страницы для рендера соответсвующего контента
    const location = useLocation();

    // добавляем в state полученные данные
    useEffect(() => {
        if(data) {
            setAuthorBook(authorBook => <AuthorCard key={data[0].id} data={data[0]}/>);
            setAuthorWebinar(authorWebinar => <AuthorCard key={data[1].id} data={data[1]}/>)
        }
    }, [data]);

    // создаем уникальный идентификатор для секции
    const id = location.pathname === '/ebook' ? 'author/book'
                : location.pathname === '/webinar' ? 'author/webinar'
                : '';

    // формируем соответствующий контент
    const content = location.pathname === '/ebook' ?
                    setContent({process, isError, isPending, Components: authorBook})
                    : location.pathname === '/webinar' ?
                    setContent({process, isError, isPending, Components: authorWebinar})
                    : null;

    
    return (
        <section id={id} className="about_author">
            <h2 className="header__h2 roboto-bold">About author</h2>
            {content}
        </section>
    )
}

export default Author;