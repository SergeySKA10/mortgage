import './Article.scss';
import avatarScott from '../../../assets/img/main_page/avatar_consultant/avatar_scott.png';
import avatarJustin from '../../../assets/img/main_page/avatar_consultant/avatar_justin.png';

const Article = () => {
    return (
        <div class="article__education_wrapper">
            <div id="article-big_left" class="article__block">
                <div class="article__logo roboto-bold">Blog</div>
                <h4 class="header__h4 roboto-bold">Article #1</h4>
                <div class="article__descr roboto-regular">Terms of your offer, how quickly you can turn things around and who your lenders is advising.</div>
                <div class="article__education__line">
                    <hr class="line_dark"/>
                </div>
                <div class="article__by">
                    <div class="article__by_photo">
                        <img src={avatarScott} alt="photo"/>
                    </div>
                    <div class="article__by_name roboto-regular">
                        by
                        <div class="roboto-bold">Scott Johnson</div>
                    </div>
                </div>
            </div>

            <div class="article__block">
                <div class="article__logo roboto-bold">Blog</div>
                <h4 class="header__h4 roboto-bold">Article #2</h4>
                <div class="article__descr roboto-regular">Terms of your offer, how quickly you can turn things around and who your lenders is advising.</div>
                <div class="article__education__line">
                    <hr class="line_dark"/>
                </div>
                <div class="article__by">
                    <div class="article__by_photo">
                        <img src={avatarScott} alt="photo"/>
                    </div>
                    <div class="article__by_name roboto-regular">
                        by
                        <div class="roboto-bold">Scott Johnson</div>
                    </div>
                </div>
            </div>

            <div class="article__block article-active">
                <div class="article__logo roboto-bold">Blog</div>
                <h4 class="header__h4 roboto-bold">Article #3</h4>
                <div class="article__descr roboto-regular">Terms of your offer, how quickly you can turn things around and who your lenders is advising.</div>
                <div class="article__education__line">
                    <hr class="line_dark"/>
                </div>
                <div class="article__by">
                    <div class="article__by_photo">
                        <img src={avatarJustin} alt="photo"/>
                    </div>
                    <div class="article__by_name roboto-regular">
                        by
                        <div class="roboto-bold">Justin Roberts</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;