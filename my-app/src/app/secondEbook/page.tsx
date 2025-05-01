import Education from '@/features/components/Education/Education';
import '@/style/global.css';

export default function SecondBook() {
    return (
        <>
            <Education />
        </>
    );
}

// import { useState } from 'react';

// import SecondEbookPromo from "../components/PromoSecondEbook/SecondEbookPromo";
// import Info from "../components/Info/Info";
// import Education from '../components/BlogEducation/Education';

// const SecondEbookPage = () => {
//     // создание state для имени автора и названия книги для передачи в компонент promo
//     const [author, setAuthor] = useState('');
//     const [nameBook, setNameBook] = useState('');

//     return (
//         <>
//             <SecondEbookPromo author={author} nameBook={nameBook}/>
//             <Info setAuthor={setAuthor} setNameBook={setNameBook}/>
//             <Education/>
//         </>
//     )
// }

// export default SecondEbookPage;
