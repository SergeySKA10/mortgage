import './Article.scss';
import avatarScott from '../../../assets/img/main_page/avatar_consultant/avatar_scott.png';
import avatarJustin from '../../../assets/img/main_page/avatar_consultant/avatar_justin.png';

const Article = () => {
    const initialState = {
        articles: [
            {
                subheader: 'Blog',
                header: 'Article #1',
                descr: 'Terms of your offer, how quickly you can turn things around and who your lenders is advising.',
                avatar: avatarScott,
                nameSpeaker: 'Scott Johnson'
            },
            {
                subheader: 'Blog',
                header: 'Article #2',
                descr: 'Terms of your offer, how quickly you can turn things around and who your lenders is advising.',
                avatar: avatarScott,
                nameSpeaker: 'Scott Johnson'
            },
            {
                subheader: 'Blog',
                header: 'Article #3',
                descr: 'Terms of your offer, how quickly you can turn things around and who your lenders is advising.',
                avatar: avatarJustin,
                nameSpeaker: 'Justin Roberts'
            }
        ]
    }

    const articleBlock = initialState.articles.map((el, i) => {
        const id = i === 0 ? 'article-big_left' : '';
        const {subheader, header, descr, avatar, nameSpeaker} = el;

        return (
            <ViewBlock
                id={id}
                subheader={subheader}
                header={header}
                descr={descr}
                avatar={avatar}
                nameSpeaker={nameSpeaker}
            />
        )
    })

    return (
        <div class="article__education_wrapper">
            {articleBlock}
        </div>
    )
}

const ViewBlock = (props) => {
    const {id, subheader, header, descr, avatar, nameSpeaker} = props;

    return (
        <div id={id} class="article__block">
            <div class="article__logo roboto-bold">{subheader}</div>
            <h4 class="header__h4 roboto-bold">{header}</h4>
            <div class="article__descr roboto-regular">{descr}</div>
            <div class="article__education__line">
                <hr class="line_dark"/>
            </div>
            <div class="article__by">
                <div class="article__by_photo">
                    <img src={avatar} alt="photo"/>
                </div>
                <div class="article__by_name roboto-regular">
                    by
                    <div class="roboto-bold">{nameSpeaker}</div>
                </div>
            </div>
        </div>
    )
}

export default Article;