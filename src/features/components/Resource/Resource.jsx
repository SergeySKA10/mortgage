import { ButtonDownLoad } from '../ui/Buttons/ButtonDownload';
import { ButtonWatch } from '../ui/Buttons/ButtonWatch';
import {Line} from '../ui/Line/Line';

import './Resource.scss';

const Resource = () => {
    return (
        <div className="article__resources">
            <h2 className="header__h2-left roboto-bold">Resources</h2>
            <div className="article__resources_wrapper">
                <div className="article__resources_block">
                    <div className="article__resources_descr">
                        <div className="article__resources_descr-img">
                            <img src='https://github.com/SergeySKA10/mortgage/blob/assets/src/assets/img/book/book.png?raw=true' alt="book"/>
                        </div>
                        <div className="article__resources_descr-book">
                            <div className="article__logo roboto-bold">Resources</div>
                            <div className="article__book roboto-bold">9 Things You Must Know About Buying Your First Home</div>
                        </div>
                    </div>
                    <div className="article__resources__line">
                        <Line/>
                    </div>
                    <div className="article__resources_button">
                        <ButtonDownLoad path='/database/mortgage.pdf' name='mortgage.pdf'/>
                    </div>
                </div>

                <div className="article__resources_block">
                    <div className="article__resources_descr">
                        <div className="article__resources_descr-img">
                            <img src='https://github.com/SergeySKA10/mortgage/blob/assets/src/assets/img/book/book_cover.png?raw=true' alt="book"/>
                        </div>
                        <div className="article__resources_descr-book">
                            <div className="article__logo roboto-bold">Resources</div>
                            <div className="article__book roboto-bold">Webinar name</div>
                        </div>
                    </div>
                    <div className="article__resources__line">
                        <Line/>
                    </div>
                    <div className="article__resources_button">
                        <ButtonWatch/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resource;