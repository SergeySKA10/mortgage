import { useState, useEffect } from 'react';
import useGetQueryServices from '../../../services/useGetQueryServices';
import setContent from '../../../utils/setContent';

import BookCard from '../ui/BookCard/BookCard';

import './Resource.scss';

const Resource = () => {
    const [books, setBooks] = useState(null);
    const [webinars, setWebinars] = useState(null);

    const {process, getResources: {data, isError, isPending}} = useGetQueryServices();

    useEffect(() => {
        if (data) {
            setBooks(books => data.books.map(el => {
                return <BookCard data={el}/>
            }));
            setWebinars(webinars => data.webinars.map(el => {
                return <BookCard data={el}/>
            }))
        }
        
    }, [data])

    const viewBlock =  <>
                            {books} 
                            {webinars} 
                        </>

    return (
        <div className="article__resources">
            <h2 className="header__h2-left roboto-bold">Resources</h2>
            <div className="article__resources_wrapper">
                {setContent(process, isError, isPending, viewBlock)}
            </div>
        </div>
    )
}

export default Resource;