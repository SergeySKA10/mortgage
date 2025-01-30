import { useState } from 'react';

import SecondEbookPromo from "../components/PromoSecondEbook/SecondEbookPromo";
import Info from "../components/Info/Info";
import Article from "../components/Article/Article";

const SecondEbookPage = () => {
    // создание state для имени автора и названия книги для передачи в компонент promo
    const [author, setAuthor] = useState('');
    const [nameBook, setNameBook] = useState('');

    return (
        <>
            <SecondEbookPromo author={author} nameBook={nameBook}/>
            <Info setAuthor={setAuthor} setNameBook={setNameBook}/>
            <Article/>
        </>
    )
}

export default SecondEbookPage;