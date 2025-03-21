// import useGetData from '../../../services/useGetData';
// import setContent from '../../../utils/setContent';

// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { sortByDate } from '../../../utils/sortByDate';

// import ArticleCard from '../ui/ArticleCard/ArticleCard';

// import './Education.scss';
// import './EducationMedia.scss';

// const Education = () => {
//     // делаем запрос для получения данных
//     const {process, getData: {data, isError, isPending}} = useGetData('articles', 6);
//     // state для блоков карточек для страницы Blog
//     const [articlesBlog, setArticlesBlog] = useState([]);
//     // state для блоков карточек для страницы Книги
//     const [articlesBook, setArticlesBook] = useState([]);
//     // стейт для активного класса карточки
//     const [activeClazzBlog, setActiveClazzBlog] = useState(1);
//     // стейт для активного класса карточки
//     const [activeClazzBook, setActiveClazzBook] = useState(1);

//     // переменная для отслеживания страницы
//     const location = useLocation();

//     const onChangeActive = (target) => {
//         switch (location.pathname) {
//             case '/blog':
//                 setActiveClazzBlog(+target.getAttribute('data-index'));
//                 break;
//             case '/secondebook':
//                 setActiveClazzBook(+target.getAttribute('data-index'));
//                 break;
//             default:
//                 throw new Error('The component cannot be rendered on this page, the page is not specified when generating data')
//         }

//     }

//     // функиця формирования карточек для страницы Blog
//     const addArticlesForBlog = (data) => {
//         setArticlesBlog(articlesBlog => data.map((el, i) => {
//             const large = i === 0 ? 'large' : i === 6 ?  'large-right' : '';
//             let order;

//             switch (i) {
//                 case 1:
//                     order = {order: "3"};
//                     break;
//                 case 2:
//                     order = {order: "4"};
//                     break;
//                 case 3:
//                     order = {order: "2"};
//                     break;
//                 default:
//                     order = {order: `${i+ 1}`}
//             }

//             // задаем класс активости
//             const active = i === activeClazzBlog ? 'article-active' : '';

//             return (
//                 <ArticleCard
//                     key={el.id}
//                     data={el}
//                     index={i}
//                     size={large}
//                     active={active}
//                     onChangeActive={onChangeActive}
//                     order={order}
//                 />
//             )
//         }));
//     }

//     // функиця формирования карточек для страницы SecondBook
//     const addArticlesForBook = (data) => {
//         setArticlesBook(articleBook => data.map((el, i) => {
//             // задаем класс активости
//             const active = i === activeClazzBook ? 'article-active' : '';

//             // отображение последних 3-х карточек с данными
//             if (i > data.length - 4) {
//                 return (
//                     <ArticleCard
//                         key={el.id}
//                         data={el}
//                         index={i}
//                         active={active}
//                         onChangeActive={onChangeActive}
//                     />
//                 )
//             } else {
//                 return null;
//             }
//         }));
//     }

//     useEffect(() => {
//         if (data) {
//             const sortData = sortByDate(data);
//             switch (location.pathname) {
//                 case '/blog':
//                     addArticlesForBlog(sortData);
//                     break;
//                 case '/secondebook':
//                     addArticlesForBook(sortData);
//                     break;
//                 default:
//                     throw new Error('The component cannot be rendered on this page, the page is not specified when generating data')
//             }
//         }
//     }, [data, activeClazzBlog, activeClazzBook]);

//     // формирование отображаемого контента
//     const content = location.pathname === '/blog' ?
//                     <>
//                        <h2 className="header__h2-left roboto-bold">Education</h2>
//                         <div className="blog_education__wrapper">
//                             {setContent({process, isError, isPending, Components: articlesBlog})}
//                         </div>
//                     </>
//                     : location.pathname === '/secondebook' ?
//                     <>
//                         <h2 className="header__h2 roboto-bold">More articles</h2>
//                         <div className="blog_education__wrapper">
//                             {setContent({process, isError, isPending, Components: articlesBook})}
//                         </div>
//                     </>
//                     : null;

//     // создаем уникальный идентификатор для секции
//     const id = location.pathname === '/blog' ? 'education/blog'
//     : location.pathname === '/secondebook' ? 'secondbook/articles'
//     : '';

//     return (
//         <section id={id} className="blog_education">
//             <div className="container">
//                 {content}
//             </div>
//         </section>
//     )
// }

// export default Education;
