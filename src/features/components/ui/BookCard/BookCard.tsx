import Image from 'next/image';
import Link from 'next/link';
import { ButtonDownLoad } from '../Buttons/ButtonDownload';
import { ButtonWatch } from '../Buttons/ButtonWatch';
import { Line } from '../Line/Line';

import { IBookCardProps } from '@/shared/shared-components/componentsTypes';

import './BookCard.scss';

const BookCard = ({ data }: IBookCardProps) => {
    const { id, name, pictures, category, link, type } = data;

    // формирование ссылки на страницу
    const path =
        id === 'book/things'
            ? '/ebook'
            : id === 'book/second'
            ? '/secondebook'
            : id === 'webinar/one'
            ? '/webinar'
            : '#';

    // формирование соответствующей кнопки
    const button =
        type === 'download' ? (
            <ButtonDownLoad path={link} name={`${name}.pdf`} />
        ) : type === 'video' ? (
            <ButtonWatch link={link} />
        ) : null;
    return (
        <div className="article__resources_block">
            <div className="article__resources_descr">
                <div className="article__resources_descr-img">
                    <Image
                        tabIndex={0}
                        src={pictures[0]}
                        alt={name}
                        width={96}
                        height={125}
                    />
                </div>
                <div className="article__resources_descr-book">
                    <div
                        tabIndex={0}
                        className="article__logo-book roboto-bold"
                    >
                        {category}
                    </div>
                    <Link
                        tabIndex={0}
                        href={path}
                        className="article__book roboto-bold"
                    >
                        {name}
                    </Link>
                </div>
            </div>
            <div className="article__resources__line">
                <Line />
            </div>
            <div className="article__resources_button">{button}</div>
        </div>
    );
};

export default BookCard;
