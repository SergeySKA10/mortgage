import Filters from '../Filters/Filters';
import Article from '../Article/Article';
import Resource from '../Resource/Resource';

import './EducationBlock.scss';
import './EducationBlockMedia.scss';

const EducationBlock = () => {
    return (
        <section class="article">
            <div class="container">
                <div class="article__info">
                    <div class="article__info-inner">
                        <div class="article__education">
                            <h2 class="header__h2-left roboto-bold">Education</h2>
                            <Filters/>
                        </div>
                        <Article/>
                    </div> 
                    <Resource/>
                </div>
            </div>
        </section>
    )
}

export default EducationBlock;