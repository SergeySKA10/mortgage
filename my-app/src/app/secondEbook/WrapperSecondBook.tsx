'use client';

import { useState } from 'react';
import SecondEbookPromo from '@/features/components/PromoSecondEbook/SecondEbookPromo';
import Info from '@/features/components/Info/Info';

export const WrapperSecondBook = () => {
    // создание state для имени автора и названия книги для передачи в компонент promo
    const [author, setAuthor] = useState<string>('Book');
    const [nameBook, setNameBook] = useState<string>('Author');
    const [loading, setLoading] = useState<boolean>(true);

    return (
        <>
            <SecondEbookPromo
                author={author}
                nameBook={nameBook}
                loading={loading}
            />
            <Info
                setAuthor={setAuthor}
                setNameBook={setNameBook}
                setLoading={setLoading}
            />
        </>
    );
};
