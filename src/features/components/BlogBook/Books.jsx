import { useState, useEffect } from 'react';
import useGetData from '../../../services/useGetData';
import setContent from '../../../utils/setContent';

import BookCard from '../ui/BookCard/BookCard';

import './Books.scss';
import './BooksMedia.scss';

const Books = () => {
    // state для книг и вебинаров
    const [books, setBooks] = useState(null);
    const [webinars, setWebinars] = useState(null);

    // получение данных
    const {process, getData: {data, isError, isPending}} = useGetData('resources', 7);

    // формирование карточек книг и вебинаров
    useEffect(() => {
        if (data) {
            setBooks(books => data.books.map(el => {
                return <BookCard key={el.id} data={el}/>
            }));
            setWebinars(webinars => data.webinars.map(el => {
                return <BookCard key={el.id} data={el}/>
            }))
        }
        
    }, [data])

    const viewBlock =  <>
                            {books} 
                            {webinars} 
                        </>

    return (
        <section className="blog_books">
            <div className="container">
                <div className="blog_books__resources">
                    <h2 className="header__h2-left roboto-bold">Resources</h2>
                    <div className="blog_books__wrapper">
                        {setContent({process, isError, isPending, Components: viewBlock})}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Books;