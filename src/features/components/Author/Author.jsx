import './Author.scss';
import './AuthorMedia.scss';

const Author = () => {
    return (
        <section class="about_author">
            <h2 class="header__h2 roboto-bold">About author</h2>
            <div class="about_author__wrapper">
                <div class="about_author__photo">
                    <img src="assets/img/main_page/getting_mortgage/Justin.png" alt="photo"/>
                </div>
                <div class="about_author__descr">
                    <div class="about_author__subheader roboto-bold">The master mind</div>
                    <div class="about_author__name roboto-bold">Justin</div>
                    <div class="about_author__info roboto-regular">Rates change, but every mortgage journey starts with a relationship. (Pssst...it's not just about clicking a button)</div>
                    <div class="about_author__btn">
                        <button class="btn btn__play">
                            <a href="#"><div class="btn__play-block"></div></a>
                        </button>
                        <div class="about_author__meet roboto-regular">Meet Justin</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Author;