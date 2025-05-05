import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/app/lib/getQueryClient';
import { Suspense } from 'react';
import { ResourceInfo } from './ResourceInfo';
import { ResourceSkeleton } from './ResourceSkeleton';

const Resource = () => {
    const queryClient = getQueryClient();

    return (
        <section id="resourse/blog" className="article__resources">
            <h2 tabIndex={0} className="header__h2-left">
                Resources
            </h2>
            <div className="article__resources_wrapper">
                <Suspense key={'resourceBlock'} fallback={<ResourceSkeleton />}>
                    <HydrationBoundary state={dehydrate(queryClient)}>
                        <ResourceInfo />
                    </HydrationBoundary>
                </Suspense>
            </div>
        </section>
    );
};

export default Resource;
