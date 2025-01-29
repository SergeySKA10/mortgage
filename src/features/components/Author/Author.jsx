import useGetData from '../../../services/useGetData';
import setContent from '../../../utils/setContent';

import { useState, useEffect } from 'react';
import AuthorCard from '../ui/AuthorCard/AuthorCard';

import './Author.scss';
import './AuthorMedia.scss';

const Author = () => {
    // делаем запрос для получения данных
    const {process, getData: {data, isError, isPending}} = useGetData('mentors', 1);

    // создаем изначальное состояние для карточки автора
    const [author, setAuthor] = useState([]);

    // добавляем в карточки полученные данные
    useEffect(() => {
        if(data) {
            setAuthor(author => <AuthorCard key={data[0].id} data={data[0]}/>);
        }
    }, [data]);
    
    return (
        <section class="about_author">
            <h2 class="header__h2 roboto-bold">About author</h2>
            {setContent({process, isError, isPending, Components: author})}
        </section>
    )
}

export default Author;