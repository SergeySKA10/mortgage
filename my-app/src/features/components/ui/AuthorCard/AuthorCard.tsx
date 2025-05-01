import { ButtonPlay } from '../Buttons/ButtonPlay';
import Image from 'next/image';
import type { IAuthorCardProps } from '@/shared/shared-components/componentsTypes';
import './AuthorCard.scss';

const AuthorCard = ({
    data: { photo, link, name, quality, descr },
}: IAuthorCardProps) => {
    return (
        <div className="about_author__wrapper">
            <div className="about_author__photo">
                <Image src={photo} alt={name} width={460} height={338} />
            </div>
            <div className="about_author__descr">
                <div className="about_author__subheader roboto-bold">
                    {quality}
                </div>
                <div className="about_author__name roboto-bold">{name}</div>
                <div className="about_author__info roboto-regular">{descr}</div>
                <div className="about_author__btn">
                    <ButtonPlay link={link} text={''} />
                    <div className="about_author__meet roboto-regular">
                        Meet {name}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorCard;
