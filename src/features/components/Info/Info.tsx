// import useGetData from '../../../services/useGetData';
// import setContent from '../../../utils/setContent';

// import { useEffect } from 'react';

// import './Info.scss';
// import './InfoMedia.scss';

// const Info = ({setAuthor, setNameBook}) => {
//     // получение данных
//     const {process, getData: {data, isError, isPending}} = useGetData('resources', 7);

//     const content = setContent({process, isError, isPending, Components: <ViewWrapper data={data?.books[1]}/>})

//     // запись в state автора и название книги
//     useEffect(() => {
//         if(data) {
//             setAuthor(data.books[1].author);
//             setNameBook(data.books[1].name);
//         }
//     }, [data])

//     return (
//         <section className="info">
//             <div className="info__wrapper">
//                 {content}
//             </div>
//         </section>
//     )
// }

// const ViewWrapper = ({data: {descr, pictures}}) => {
//     return (
//         <>
//             <div className="info__block">
//                 <h2 className="header__h2-left roboto-bold">What's in the report</h2>
//                 <div className="info__descr roboto-regular">{descr[0]}</div>
//             </div>
//             <div className="info__block">
//                 <h4 className="header__h4 roboto-bold">1st thing</h4>
//                 <div className="info__block_descr roboto-regular">{descr[1]}</div>
//                 <div className="info__block_img">
//                     <img src={pictures[0]} alt="mountains"/>
//                 </div>
//             </div>
//             <div className="info__block">
//                 <h4 className="header__h4 roboto-bold">2st thing</h4>
//                 <div className="info__block_descr roboto-regular">{descr[2]}</div>
//                 <div className="info__block_img">
//                     <img src={pictures[1]} alt="space"/>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Info;
