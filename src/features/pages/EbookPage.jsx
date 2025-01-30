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

    return (
        <>
            <PromoEbook author={author} nameBook={nameBook}/>
            <AboutEbook setAuthor={setAuthor} setNameBook={setNameBook}/>
            <Report/>
            <Author/>
            <Start/>
        </>
    )
}

export default EbookPage;