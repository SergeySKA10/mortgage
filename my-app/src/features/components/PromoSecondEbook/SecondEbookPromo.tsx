import Link from 'next/link';
import Image from 'next/image';
import ISecondBookProps from '@/shared/shared-components/componentsTypes';

import './SecondEbookPromo.scss';
import './SecondEbookPromoMedia.scss';

const SecondEbookPromo = ({ author, nameBook, loading }: ISecondBookProps) => {
    return (
        <section className="second_ebook__promo">
            <header className="second_ebook__header">
                <Link
                    tabIndex={0}
                    href="/"
                    style={{ display: 'block', width: '340px' }}
                >
                    <Image
                        tabIndex={0}
                        src={'/logo/logo_white.svg'}
                        alt="logo"
                        width={335}
                        height={100}
                    />
                </Link>
            </header>
            <h1 tabIndex={0} className="header__h1 roboto-bold">
                {loading ? `Loading ${nameBook}...` : nameBook}
            </h1>
            <div tabIndex={0} className="second_ebook__author roboto-bold">
                {loading ? `Loading ${author}...` : author}
            </div>
        </section>
    );
};

export default SecondEbookPromo;
