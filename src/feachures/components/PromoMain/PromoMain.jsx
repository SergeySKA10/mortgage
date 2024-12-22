
import './PromoMain.scss';
import './PromoMainMedia.scss';

import logo from '../../../assets/icons/main_page/logo/NAF_Logo.svg'

const PromoMain = () => {
    return (
        <section class="promo_main"> 
            <div class="promo_main__descr">
                <h2 class="promo_main__subheader roboto-bold">Why a mortgage is so much more than just a rate?</h2>
                <div class="promo_main__video">
                    <button class="btn btn__play">
                        <a href="#"><div class="btn__play-block"></div></a>
                    </button>
                    <div class="promo_main__time roboto-regular">0:34</div>
                </div>
            </div>

            <div class="promo_main__info">
            
                <div class="promo_main__logo">
                    <img src={logo} alt="logo"/>
                </div>

                <h1 class="header__h1 roboto-bold"> 
                    Finding a mortgage is so <span>much more</span> than <span> just a rate</span>
                </h1>

                <p class="promo_main__info_text roboto-regular">
                    Rates change, but every mortgage journey starts with a relationship. (Pssst...it's not just about clicking a button)
                </p>

                <div class="promo_main__line">
                    <hr class="line line_dark"/>
                </div>

                <div class="promo_main__start">
                    <p class="promo_main__start_text roboto-bold">Let us help you create your mortgage journey</p>
                    <div class="promo_main__start_btns">
                        <button class="btn btn__rct">
                            <a class="roboto-bold" href="#">Get started</a>
                            <div></div>
                        </button>
                        <button class="btn btn__white">
                            <a class="roboto-bold" href="#">Schedule a time</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PromoMain;