import './PopUpWindow.scss';
import quote from '../../../assets/icons/main_page/quote/left-quote.svg';
import avatarJustin from '../../../assets/img/main_page/avatar_consultant/avatar_justin.png';

const PopUpWindow = () => {
    return (
        <div class="story__window">
            <div class="story__window_wrapper">
                <div class="story__window_quote">
                    <img src={quote} alt="quote"/>
                </div>
                <p class="story__window_descr roboto-regular">
                    A mortgage isn't just about a rate. It's about building a strategy to help you leverage your wealth.
                </p>
                <div class="story__window_profile">
                    <div class="story__window_profile-photo">
                        <img src={avatarJustin} alt="Justin"/>
                    </div>
                    <div class="story__window_profile-name roboto-bold">Justin</div>
                </div>
            </div>
            <div class="story__window_line">
                <hr class="line__dark"/>
            </div>
            <div class="story__window_button">
                <div class="roboto-regular">Have a question?</div>
                <button class="btn btn__mini"><a class=" roboto-bold" href="#">Let's talk</a></button>
            </div>
        </div>
    )
}

export default PopUpWindow;