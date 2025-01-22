// import { useQuery } from '@tanstack/react-query';
// import { useHttp } from '../../../hooks/http.hook';
import { useState, useEffect } from 'react';
import useGetQueryServices from '../../../services/useGetQueryServices';

import Spinner from '../ui/Spinner/Spinner';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';
import BookCard from '../ui/BookCard/BookCard';

import { ButtonDownLoad } from '../ui/Buttons/ButtonDownload';
import { ButtonWatch } from '../ui/Buttons/ButtonWatch';
import {Line} from '../ui/Line/Line';

import './Resource.scss';

const Resource = () => {
    // const  request = useHttp();

    // const {data, isPending, isError} = useQuery({
    //     queryKey: ['books'],
    //     queryFn: () => request({url: 'http://localhost:3007/resources'})
    // });

    const [books, setBooks] = useState(null);

    const {getResources} = useGetQueryServices()
    const {data, isError, isPending} = getResources;

    useEffect(() => {
        if (data) {
            setBooks(books => data.books.map(el => {
                return <BookCard data={el}/>
            }))
        }
        
    }, [data])

    // const books = 

    return (
        <div className="article__resources">
            <h2 className="header__h2-left roboto-bold">Resources</h2>
            <div className="article__resources_wrapper">
                {/* <div className="article__resources_block">
                    <div className="article__resources_descr">
                        <div className="article__resources_descr-img">
                            <img src='https://github.com/SergeySKA10/mortgage/blob/assets/src/assets/img/book/book.png?raw=true' alt="book"/>
                        </div>
                        <div className="article__resources_descr-book">
                            <div className="article__logo roboto-bold">Resources</div>
                            <div className="article__book roboto-bold">9 Things You Must Know About Buying Your First Home</div>
                        </div>
                    </div>
                    <div className="article__resources__line">
                        <Line/>
                    </div>
                    <div className="article__resources_button">
                        <ButtonDownLoad path='/database/mortgage.pdf' name='mortgage.pdf'/>
                    </div>
                </div> */}

                {books}

                <div className="article__resources_block">
                    <div className="article__resources_descr">
                        <div className="article__resources_descr-img">
                            <img src='https://github.com/SergeySKA10/mortgage/blob/assets/src/assets/img/book/book_cover.png?raw=true' alt="book"/>
                        </div>
                        <div className="article__resources_descr-book">
                            <div className="article__logo roboto-bold">Resources</div>
                            <div className="article__book roboto-bold">Webinar name</div>
                        </div>
                    </div>
                    <div className="article__resources__line">
                        <Line/>
                    </div>
                    <div className="article__resources_button">
                        <ButtonWatch/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resource;