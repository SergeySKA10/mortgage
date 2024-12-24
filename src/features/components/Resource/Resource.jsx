import './Resource.scss';
import coverBook from '../../../assets/img/book/book_cover.png';
import book from '../../../assets/img/book/book.png';

const Resource = () => {
    return (
        <div className="article__resources">
            <h2 className="header__h2-left roboto-bold">Resources</h2>
            <div className="article__resources_wrapper">
                <div className="article__resources_block">
                    <div className="article__resources_descr">
                        <div className="article__resources_descr-img">
                            <img src={book} alt="book"/>
                        </div>
                        <div className="article__resources_descr-book">
                            <div className="article__logo roboto-bold">Resources</div>
                            <div className="article__book roboto-bold">9 Things You Must Know About Buying Your First Home</div>
                        </div>
                    </div>
                    <div className="article__resources__line">
                        <hr className="line_dark"/>
                    </div>
                    <div className="article__resources_button">
                        <button className="btn btn__watch-download">
                            <div className="btn btn__watch-download-text roboto-bold">Download</div>
                            <div className="btn btn__watch-download-arrow"></div>
                        </button>
                    </div>
                </div>

                <div className="article__resources_block">
                    <div className="article__resources_descr">
                        <div className="article__resources_descr-img">
                            <img src={coverBook} alt="book"/>
                        </div>
                        <div className="article__resources_descr-book">
                            <div className="article__logo roboto-bold">Resources</div>
                            <div className="article__book roboto-bold">Webinar name</div>
                        </div>
                    </div>
                    <div className="article__resources__line">
                        <hr className="line_dark"/>
                    </div>
                    <div className="article__resources_button">
                        <button className="btn btn__watch">
                            <div className="btn btn__watch-eyelid">
                                <div className="btn btn__watch-eys"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resource;