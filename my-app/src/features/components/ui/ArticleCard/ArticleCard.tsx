import Image from 'next/image';
// import Link from 'next/link';

import type { IArticleCardProps } from '@/shared/shared-components/componentsTypes';

import { Line } from '../Line/Line';
import './ArticleCard.scss';

const ArticleCard = ({ data }: IArticleCardProps) => {
    const {
        // link,
        subheader,
        header,
        descr,
        avatar,
        name,
        size,
        // index,
        order = { order: '' },
    } = data;

    return (
        <article
            tabIndex={0}
            // href={`${link}`}
            className={`article__block`}
            data-size={size}
            // data-index={index}
            style={{ ...order }}
        >
            <div tabIndex={0} className="article__logo roboto-bold">
                {subheader}
            </div>
            <h4 tabIndex={0} className="header__h4 roboto-bold">
                {header}
            </h4>
            <div tabIndex={0} className="article__descr roboto-regular">
                {descr}
            </div>
            <div className="article__education__line">
                <Line />
            </div>
            <div className="article__by">
                <div className="article__by_photo">
                    <Image
                        tabIndex={0}
                        src={avatar}
                        alt="photo"
                        height={48}
                        width={48}
                    />
                </div>
                <div tabIndex={0} className="article__by_name roboto-regular">
                    by
                    <div tabIndex={0} className="roboto-bold">
                        {name}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ArticleCard;
