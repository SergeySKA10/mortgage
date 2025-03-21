// import { useLocation } from 'react-router-dom';
// import { Line } from '../ui/Line/Line';
// import { Button } from '../ui/Buttons/Button';

// import './Start.scss';
// import './StartMedia.scss';

// const Start = () => {
//     const location = useLocation();

//     // создаем уникальный идентификатор для секции
//     const id = location.pathname === '/ebook' ? 'started/book'
//     : location.pathname === '/webinar' ? 'started/webinar'
//     : '';

//     return (
//         <section id={id} className="start">
//             <div className="container">
//                 <div className="start__wrapper">
//                     <div className="start__info">
//                         <h2 className="header__h2-left roboto-bold">Get started with us</h2>
//                         <p className="start__descr roboto-regular">Rates change, but every mortgage journey starts with a relationship. (Pssst...it's not just about clicking a button)</p>
//                         <div className="start__line">
//                             <Line/>
//                         </div>
//                         <div className="start__btns">
//                             <Button text='Get started' link='#'/>
//                             <Button type='white' text='Schedule a time' link='#'/>
//                         </div>
//                     </div>
//                     <div className="start__img">
//                         <img src="https://github.com/SergeySKA10/mortgage/blob/assets/src/assets/img/ebook_page/cat.png?raw=true" alt="house"/>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Start;
