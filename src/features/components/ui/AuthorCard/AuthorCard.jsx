import { ButtonPlay } from "../Buttons/ButtonPlay";
import './AuthorCard.scss';

const AuthorCard = ({data: {photo, link, name, quality, descr}}) => {
    return (
        <div className="about_author__wrapper">
            <div className="about_author__photo">
                <img src={photo} alt={name}/>
            </div>
            <div className="about_author__descr">
                <div className="about_author__subheader roboto-bold">{quality}</div>
                <div className="about_author__name roboto-bold">{name}</div>
                <div className="about_author__info roboto-regular">{descr}</div>
                <div className="about_author__btn">
                    <ButtonPlay link={link}/>
                    <div className="about_author__meet roboto-regular">Meet {name}</div>
                </div>
            </div>
        </div>
    )
}

export default AuthorCard;