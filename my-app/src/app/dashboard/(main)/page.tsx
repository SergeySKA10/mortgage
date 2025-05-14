import { Suspense } from 'react';
import { SkeletonDashboard } from './SkeletonDashboard';
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

    return (
        <>
            <Suspense
                key={'dashboard-content'}
                fallback={<SkeletonDashboard />}
            >
                <DashboardCards query={query} />
            </Suspense>
        </>
    );
}
