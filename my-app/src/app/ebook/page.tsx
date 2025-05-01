import Report from '@/features/components/Report/Report';
import Author from '@/features/components/Author/Author';
import Start from '@/features/components/Start/Start';

import '@/style/global.css';

export default function Ebook() {
    return (
        <>
            {/* <Report /> */}
            <Author />
            <Start />
        </>
    );
}

// const EbookPage = () => {
//     // создание state для имени автора и названия книги для передачи в компонент promo
//     const [author, setAuthor] = useState('');
//     const [nameBook, setNameBook] = useState('');
//     // state для форматов и индекса активного формата
//     const [format, setFormat] = useState([]);
//     const [indexActiveFormat, setIndexActiveFormat] = useState('');

//     return (
//         <>
//             <PromoEbook
//                 author={author}
//                 nameBook={nameBook}
//                 format={format}
//                 indexActiveFormat={indexActiveFormat}
//                 setIndexActiveFormat={setIndexActiveFormat}/>
//             <AboutEbook
//                 setAuthor={setAuthor}
//                 setNameBook={setNameBook}
//                 setFormat={setFormat}
//                 format={format}
//                 indexActiveFormat={indexActiveFormat}/>
//             <Report/>
//             <Author/>
//             <Start/>
//         </>
//     )
// }
