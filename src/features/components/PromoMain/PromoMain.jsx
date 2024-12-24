
import './PromoMain.scss';
import './PromoMainMedia.scss';

import logo from '../../../assets/icons/main_page/logo/NAF_Logo.svg'

const PromoMain = () => {
    return (
        <section className="promo_main"> 
            <div className="promo_main__descr">
                <h2 className="promo_main__subheader roboto-bold">Why a mortgage is so much more than just a rate?</h2>
                <div className="promo_main__video">
                    <button className="btn btn__play">
                        <a href="#"><div className="btn__play-block"></div></a>
                    </button>
                    <div className="promo_main__time roboto-regular">0:34</div>
                </div>
            </div>

            <div className="promo_main__info">
            
                <div className="promo_main__logo">
                    <img src={logo} alt="logo"/>
                </div>

                <h1 className="header__h1 roboto-bold"> 
                    Finding a mortgage is so <span>much more</span> than <span> just a rate</span>
                </h1>

                <p className="promo_main__info_text roboto-regular">
                    Rates change, but every mortgage journey starts with a relationship. (Pssst...it's not just about clicking a button)
                </p>

                <div className="promo_main__line">
                    <hr className="line line_dark"/>
                </div>

                <div className="promo_main__start">
                    <p className="promo_main__start_text roboto-bold">Let us help you create your mortgage journey</p>
                    <div className="promo_main__start_btns">
                        <button className="btn btn__rct">
                            <a className="roboto-bold" href="#">Get started</a>
                            <div></div>
                        </button>
                        <button className="btn btn__white">
                            <a className="roboto-bold" href="#">Schedule a time</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PromoMain;