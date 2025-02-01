import useGetData from '../../../services/useGetData';
import setContent from '../../../utils/setContent';

import { ButtonPlay } from '../ui/Buttons/ButtonPlay';
import { Link } from 'react-router-dom';
import Form from '../ui/Form/Form';

import './PromoWebinar.scss';
import './PromoWebinarMedia.scss';
import logo from '../../../assets/icons/main_page/logo/NAF_Logo.svg';

const PromoWebinar = () => {
    // получение данных
    const {process, getData: {data, isError, isPending}} = useGetData('resources', 7);

    return (
        <section class="promo_webinar">
            <header class="promo_webinar__header">
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
            </header>
            {setContent({process, isError, isPending, Components: <ContentView data={data?.webinars[0]}/> })}
        </section>
    )
}

const ContentView = ({data: {name, author, descr, link}}) => {
    return (
        <div class="promo_webinar__wrapper">
            <div class="promo_webinar__info">
                <h1 class="header__h1 roboto-bold">{name}</h1>
                <div class="promo_webinar__author roboto-bold">{author}</div>
                <div class="promo_webinar__descr roboto-regular">{descr[0]}</div>
                <Form id='webinar-form' text='Get the webinar'/>
            </div>
            <div class="promo_webinar__macbook">
                <img src="https://github.com/SergeySKA10/mortgage/blob/assets/src/assets/img/webinar_page/promo/top-macbook.png?raw=true" alt="macbook"/>
                <div class="promo_webinar__macbook-play">
                    <ButtonPlay link={link}/>
                    <div class="promo_webinar__time roboto-regular">Play demo (1:34)</div>
                </div>
            </div>
        </div>
    )
}

export default PromoWebinar;