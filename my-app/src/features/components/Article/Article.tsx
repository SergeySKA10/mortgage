import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/app/lib/getQueryClient';
import { Suspense } from 'react';
import { ArticleInfo } from './ArticleInfo';
import { ArticleSkeleton } from './ArticleSkeleton';

import './Article.scss';

const Article = () => {
    const queryClient = getQueryClient();

    return (
        <Suspense key={'ArticleBlock'} fallback={<ArticleSkeleton />}>
            <div className="article__education_wrapper">
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <ArticleInfo />
                </HydrationBoundary>
            </div>
        </Suspense>
    );
};

export default Article;
