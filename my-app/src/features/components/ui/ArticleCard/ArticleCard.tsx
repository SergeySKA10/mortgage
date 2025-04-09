import Image from 'next/image';
import Link from 'next/link';

import type { IArticleCardProps } from '@/shared/shared-components/componentsTypes';

import { Line } from '../Line/Line';
import './ArticleCard.scss';

const ArticleCard = ({
    data,
    size,
    index,
    order = { order: '' },
}: IArticleCardProps) => {
    const { link, subheader, header, descr, avatar, name } = data;

    return (
        <Link
            href={`${link}`}
            className={`article__block`}
            data-size={size}
            data-index={index}
            style={{ ...order }}
        >
            <div className="article__logo roboto-bold">{subheader}</div>
            <h4 className="header__h4 roboto-bold">{header}</h4>
            <div className="article__descr roboto-regular">{descr}</div>
            <div className="article__education__line">
                <Line />
            </div>
            <div className="article__by">
                <div className="article__by_photo">
                    <Image src={avatar} alt="photo" height={48} width={48} />
                </div>
                <div className="article__by_name roboto-regular">
                    by
                    <div className="roboto-bold">{name}</div>
                </div>
            </div>
        </Link>
    );
};

export default ArticleCard;
