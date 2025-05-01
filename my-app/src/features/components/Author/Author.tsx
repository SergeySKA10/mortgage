import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/app/lib/getQueryClient';
import { Suspense } from 'react';
import { AuthorInfo } from './AuthorInfo';
import { SkeletonAuthor } from './SkeletonAuthor';

import './Author.scss';
import './AuthorMedia.scss';

const Author = () => {
    // делаем запрос для получения данных
    const queryClient = getQueryClient();

    return (
        <section className="about_author">
            <h2 className="header__h2 roboto-bold">About author</h2>
            <Suspense key={'authorBlock'} fallback={<SkeletonAuthor />}>
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <AuthorInfo />
                </HydrationBoundary>
            </Suspense>
        </section>
    );
};

export default Author;
