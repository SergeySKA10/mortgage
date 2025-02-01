import { useState } from 'react';

import PromoEbook from '../components/PromoEbook/PromoEbook';
import AboutEbook from '../components/Ebook/AboutEbook';
import Report from '../components/Report/Report';
import Author from '../components/Author/Author';
import Start from '../components/Start/Start';

const EbookPage = () => {
    // создание state для имени автора и названия книги для передачи в компонент promo
    const [author, setAuthor] = useState('');
    const [nameBook, setNameBook] = useState('');
    // state для форматов и индекса активного формата
    const [format, setFormat] = useState([]);
    const [indexActiveFormat, setIndexActiveFormat] = useState('');


    return (
        <>
            <PromoEbook 
                author={author} 
                nameBook={nameBook}
                format={format}
                indexActiveFormat={indexActiveFormat}
                setIndexActiveFormat={setIndexActiveFormat}/>
            <AboutEbook 
                setAuthor={setAuthor} 
                setNameBook={setNameBook} 
                setFormat={setFormat} 
                format={format}
                indexActiveFormat={indexActiveFormat}/>
            <Report/>
            <Author/>
            <Start/>
        </>
    )
}

export default EbookPage;