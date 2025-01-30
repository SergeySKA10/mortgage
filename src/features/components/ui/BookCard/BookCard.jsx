import { ButtonDownLoad } from '../Buttons/ButtonDownload';
import { ButtonWatch } from '../Buttons/ButtonWatch';
import {Line} from '../Line/Line';

import './BookCard.scss';

const BookCard = ({data}) => {
    const {name, pictures, category, link, type} = data;

    const button = type === 'download' ? <ButtonDownLoad path={link} name={`${name}.pdf`}/>
                : type === 'video' ? <ButtonWatch link={link}/>
                : null;
    return (
        <div className="article__resources_block">
            <div className="article__resources_descr">
                <div className="article__resources_descr-img">
                    <img src={pictures[0]} alt={name}/>
                </div>
                <div className="article__resources_descr-book">
                    <div className="article__logo roboto-bold">{category}</div>
                    <div className="article__book roboto-bold">{name}</div>
                </div>
            </div>
            <div className="article__resources__line">
                <Line/>
            </div>
            <div className="article__resources_button">
                {button}
            </div>
        </div>
    )
}

export default BookCard;