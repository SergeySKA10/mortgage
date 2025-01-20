import { NavLink } from 'react-router-dom';

import {Line} from '../Line/Line';
import './ArticleCard.scss';

const ArticleCard = ({data, size, active, index, onChangeActive, order = null}) => {
    const {link, subheader, header, descr, avatar, nameSpeaker} = data;

    // стили для большего активного блока
    const style = size && active ? {background: "#278FB4"} : null;

    return (
        <NavLink 
            to={link} 
            className={`article__block ${active}`} 
            data-size={size} 
            data-index={index}
            style={{...style, ...order}}
            onClick={(e) => onChangeActive(e.target)}
            >
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
        </NavLink>
    )
}

export default ArticleCard;