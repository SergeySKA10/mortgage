// import useGetData from '../../../services/useGetData';
// import setContent from '../../../utils/setContent';
// import { useGetDurationVideo } from '../../api/youtubeApi';

// import { ButtonPlay } from '../ui/Buttons/ButtonPlay';
// import { Link } from 'react-router-dom';
// import Form from '../ui/Form/Form';

// import './PromoWebinar.scss';
// import './PromoWebinarMedia.scss';
// import logo from '../../../assets/icons/main_page/logo/NAF_Logo.svg';

// const PromoWebinar = () => {
//     // получение данных
//     const {process, getData: {data, isError, isPending}} = useGetData('resources', 7);

//     return (
//         <section className="promo_webinar">
//             <header className="promo_webinar__header">
//                 <Link to="/">
//                     <img src={logo} alt="logo"/>
//                 </Link>
//             </header>
//             {setContent({process, isError, isPending, Components: <ContentView data={data?.webinars[0]}/> })}
//         </section>
//     )
// }

// const ContentView = ({data: {name, author, descr, link}}) => {
//     const time = useGetDurationVideo(link);
//     return (
//         <div className="promo_webinar__wrapper">
//             <div className="promo_webinar__info">
//                 <h1 className="header__h1 roboto-bold">{name}</h1>
//                 <div className="promo_webinar__author roboto-bold">{author}</div>
//                 <div className="promo_webinar__descr roboto-regular">{descr[0]}</div>
//                 <Form id='webinar-form' text='Get the webinar'/>
//             </div>
//             <div className="promo_webinar__macbook">
//                 <img src="https://github.com/SergeySKA10/mortgage/blob/assets/src/assets/img/webinar_page/promo/top-macbook.png?raw=true" alt="macbook"/>
//                 <div className="promo_webinar__macbook-play">
//                     <ButtonPlay link={link}/>
//                     <div className="promo_webinar__time roboto-regular">{`Play demo: ${time}`}</div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default PromoWebinar;
