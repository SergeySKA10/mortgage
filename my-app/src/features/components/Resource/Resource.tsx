import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/app/lib/getQueryClient';
import { Suspense } from 'react';
import { ResourceInfo } from './ResourceInfo';
import { ResourceSkeleton } from './ResourceSkeleton';

const Resource = () => {
    const queryClient = getQueryClient();

    return (
        <div className="article__resources">
            <h2 className="header__h2-left roboto-bold">Resources</h2>
            <div className="article__resources_wrapper">
                <Suspense key={'resourceBlock'} fallback={<ResourceSkeleton />}>
                    <HydrationBoundary state={dehydrate(queryClient)}>
                        <ResourceInfo />
                    </HydrationBoundary>
                </Suspense>
            </div>
        </div>
    );
};

export default Resource;
