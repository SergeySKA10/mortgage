import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/app/lib/getQueryClient';
import { Suspense } from 'react';
import { BooksInfo } from './BooksInfo';
import { SkeletonBooks } from './SkeletonBooks';

import './Books.scss';
import './BooksMedia.scss';

const Books = () => {
    const queryClient = getQueryClient();

    return (
        <section id="resourse/blog" className="blog_books">
            <div className="container">
                <div className="blog_books__resources">
                    <h2 className="header__h2-left roboto-bold">Resources</h2>
                    <div className="blog_books__wrapper">
                        <Suspense
                            key={'booksBlog'}
                            fallback={<SkeletonBooks />}
                        >
                            <HydrationBoundary state={dehydrate(queryClient)}>
                                <BooksInfo />
                            </HydrationBoundary>
                        </Suspense>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Books;
