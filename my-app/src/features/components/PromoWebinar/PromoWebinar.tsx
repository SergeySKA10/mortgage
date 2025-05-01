import Link from 'next/link';
import Image from 'next/image';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/app/lib/getQueryClient';
import { Suspense } from 'react';
import { PromoWebinarInfo } from './PromoWebinarInfo';
import { SkeletonPromoWebinar } from './SkeletonPromoWebinar';
import './PromoWebinar.scss';
import './PromoWebinarMedia.scss';

const PromoWebinar = () => {
    // получение данных
    const queryClient = getQueryClient();

    return (
        <section className="promo_webinar">
            <header className="promo_webinar__header">
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
            <Suspense key={'promoWebinar'} fallback={<SkeletonPromoWebinar />}>
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <PromoWebinarInfo />
                </HydrationBoundary>
            </Suspense>
        </section>
    );
};

export default PromoWebinar;
