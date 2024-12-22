import './Resource.scss';
import coverBook from '../../../assets/img/book/book_cover.png';
import book from '../../../assets/img/book/book.png';

const Resource = () => {
    return (
        <div class="article__resources">
            <h2 class="header__h2-left roboto-bold">Resources</h2>
            <div class="article__resources_wrapper">
                <div class="article__resources_block">
                    <div class="article__resources_descr">
                        <div class="article__resources_descr-img">
                            <img src={book} alt="book"/>
                        </div>
                        <div class="article__resources_descr-book">
                            <div class="article__logo roboto-bold">Resources</div>
                            <div class="article__book roboto-bold">9 Things You Must Know About Buying Your First Home</div>
                        </div>
                    </div>
                    <div class="article__resources__line">
                        <hr class="line_dark"/>
                    </div>
                    <div class="article__resources_button">
                        <button class="btn btn__watch-download">
                            <div class="btn btn__watch-download-text roboto-bold">Download</div>
                            <div class="btn btn__watch-download-arrow"></div>
                        </button>
                    </div>
                </div>

                <div class="article__resources_block">
                    <div class="article__resources_descr">
                        <div class="article__resources_descr-img">
                            <img src={coverBook} alt="book"/>
                        </div>
                        <div class="article__resources_descr-book">
                            <div class="article__logo roboto-bold">Resources</div>
                            <div class="article__book roboto-bold">Webinar name</div>
                        </div>
                    </div>
                    <div class="article__resources__line">
                        <hr class="line_dark"/>
                    </div>
                    <div class="article__resources_button">
                        <button class="btn btn__watch">
                            <div class="btn btn__watch-eyelid">
                                <div class="btn btn__watch-eys"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resource;