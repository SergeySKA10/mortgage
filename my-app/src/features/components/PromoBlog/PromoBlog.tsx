import Link from 'next/link';
import Image from 'next/image';

import './PromoBlog.scss';
import './PromoBlogMedia.scss';

const PromoBlog = () => {
    return (
        <section className="promo_blog">
            <header className="promo_blog__header">
                <Link href="/">
                    <Image
                        tabIndex={0}
                        src={'/logo/NAF_Logo.svg'}
                        alt="logo"
                        width={240}
                        height={43}
                        priority
                    />
                </Link>
            </header>
        </section>
    );
};

export default PromoBlog;
