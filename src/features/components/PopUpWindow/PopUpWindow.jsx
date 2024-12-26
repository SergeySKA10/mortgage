import { Button } from '../Buttons/Buttons';

import './PopUpWindow.scss';
import quote from '../../../assets/icons/main_page/quote/left-quote.svg';
import avatarJustin from '../../../assets/img/main_page/avatar_consultant/avatar_justin.png';

const PopUpWindow = () => {
    return (
        <div className="story__window">
            <div className="story__window_wrapper">
                <div className="story__window_quote">
                    <img src={quote} alt="quote"/>
                </div>
                <p className="story__window_descr roboto-regular">
                    A mortgage isn't just about a rate. It's about building a strategy to help you leverage your wealth.
                </p>
                <div className="story__window_profile">
                    <div className="story__window_profile-photo">
                        <img src={avatarJustin} alt="Justin"/>
                    </div>
                    <div className="story__window_profile-name roboto-bold">Justin</div>
                </div>
            </div>
            <div className="story__window_line">
                <hr className="line__dark"/>
            </div>
            <div className="story__window_button">
                <div className="roboto-regular">Have a question?</div>
                {/* <button className="btn btn__mini"><a className="roboto-bold" href="#">Let's talk</a></button>
                 */}
                 <Button type='mini' link='#' text="Let's talk"/>
            </div>
        </div>
    )
}

export default PopUpWindow;