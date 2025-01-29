import { Button } from '../ui/Buttons/Button';
import { ButtonPlay } from '../ui/Buttons/ButtonPlay';

import './PromoWebinar.scss';
import './PromoWebinarMedia.scss';
import logo from '../../../assets/icons/main_page/logo/NAF_Logo.svg';

const PromoWebinar = () => {
    return (
        <section class="promo_webinar">
            <header class="promo_webinar__header">
                <img src={logo} alt="logo"/>
            </header>
            <div class="promo_webinar__wrapper">
                <div class="promo_webinar__info">
                    <h1 class="header__h1 roboto-bold">Webinar name</h1>
                    <div class="promo_webinar__author roboto-bold">Scott Johnson</div>
                    <div class="promo_webinar__descr roboto-regular">So you're about to get into the world of homeownership. It's okay...everyone feels lost during this process, but the more preparation you do upfront, the smoother your journey will be.</div>
                    <form class="promo_webinar__form" action="">
                        <input class="roboto-light" name="email" placeholder="Your Email" type="text" required/>
                        <Button link='#' text='Get the webinar'/>
                    </form>
                </div>
                <div class="promo_webinar__macbook">
                    <img src="https://github.com/SergeySKA10/mortgage/blob/assets/src/assets/img/webinar_page/promo/top-macbook.png?raw=true" alt="macbook"/>
                    <div class="promo_webinar__macbook-play">
                        <ButtonPlay link='#'/>
                        <div class="promo_main__time roboto-regular">Play demo (1:34)</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PromoWebinar;