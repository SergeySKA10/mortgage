import { Suspense } from 'react';
import { SkeletonDashboard } from './SkeletonDashboard';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/app/lib/getQueryClient';
import { DashboardCards } from './DashboardCard';
import type { Key } from '@/services/getOptions';

import '@/style/global.css';
import './DashboardCards.scss';

export default async function DashboardPage(props: {
    searchParams?: Promise<{
        query?: Key;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || 'articles';
    const queryClient = getQueryClient();

    return (
        <>
            <Suspense
                key={'dashboard-content'}
                fallback={<SkeletonDashboard />}
            >
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <DashboardCards query={query} />
                </HydrationBoundary>
            </Suspense>
        </>
    );
}
