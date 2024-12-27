import { useSelector } from 'react-redux';

import {Line} from '../Line/Line';

import './Article.scss';


const Article = () => {
    // получаем из store массив для создания articleBlocks
    const articles = useSelector(state => state.reducer.articles);

    // создаем блок article для Main Page
    const articleBlock = articles.map((el, i) => {
        // делаем ограничение до 3-х блоков
        if (i < 3) {
            // созаем переменную для обозначения большого блока и передачи в props
            const large = i === 0 ? 'large' : '';
            // задаем класс активости (пока статично)
            const active = i === 2 ? 'article-active' : '';

            return (
                <ViewBlock
                    key={el.id}
                    data={el}
                    size={large}
                    active={active}
                />
            )
        }
    })

    return (
        <div className="article__education_wrapper">
            {articleBlock}
        </div>
    )
}

const ViewBlock = ({data, size, active}) => {
    const {subheader, header, descr, avatar, nameSpeaker} = data;
    const large = size;

    return (
        <div className={`article__block ${active}`} data-size={large}>
            <div className="article__logo roboto-bold">{subheader}</div>
            <h4 className="header__h4 roboto-bold">{header}</h4>
            <div className="article__descr roboto-regular">{descr}</div>
            <div className="article__education__line">
                <Line/>
            </div>
            <div className="article__by">
                <div className="article__by_photo">
                    <img src={avatar} alt="photo"/>
                </div>
                <div className="article__by_name roboto-regular">
                    by
                    <div className="roboto-bold">{nameSpeaker}</div>
                </div>
            </div>
        </div>
    )
}

export default Article;