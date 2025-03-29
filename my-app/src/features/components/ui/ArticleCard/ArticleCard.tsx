import Image from 'next/image';
import Link from 'next/link';

import type { IArticleCardProps } from '@/shared/shared-components/componentsTypes';

import { Line } from '../Line/Line';
import './ArticleCard.scss';

const ArticleCard = ({
    data,
    size,
    active,
    index,
    onChangeActive,
    order = { order: '' },
}: IArticleCardProps) => {
    const { link, subheader, header, descr, avatar, name } = data;

    // стили для большего активного блока
    const style = size && active ? { background: '#278FB4' } : null;

    return (
        <Link
            href={`${link}`}
            className={`article__block ${active}`}
            data-size={size}
            data-index={index}
            style={{ ...style, ...order }}
            onClick={(e) => {
                onChangeActive(e);
            }}
        >
            <div className="article__logo roboto-bold">{subheader}</div>
            <h4 className="header__h4 roboto-bold">{header}</h4>
            <div className="article__descr roboto-regular">{descr}</div>
            <div className="article__education__line">
                <Line />
            </div>
            <div className="article__by">
                <div className="article__by_photo">
                    <Image src={avatar} alt="photo" height={50} width={50} />
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
