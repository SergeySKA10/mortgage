import { useState, useEffect } from 'react';
import useGetData from '../../../services/useGetData';
import setContent from '../../../utils/setContent';

import BookCard from '../ui/BookCard/BookCard';

import './Resource.scss';

const Resource = () => {
    const [books, setBooks] = useState(null);
    const [webinars, setWebinars] = useState(null);

    const {process, getData: {data, isError, isPending}} = useGetData('resources', 7);

    useEffect(() => {
        if (data) {
            setBooks(<BookCard key={data.books[0].id} data={data.books[0]}/>);
            setWebinars(<BookCard key={data.webinars[0].id} data={data.webinars[0]}/>)
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
                {setContent({process, isError, isPending, Components: viewBlock})}
            </div>
        </div>
    )
}

export default Resource;