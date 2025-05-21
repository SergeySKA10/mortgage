'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getOptions } from '../../../services/getOptions';
import { DashboardInfo } from './DashboardInfo';
import { DashboardStoreInfo } from './DashboardStoreInfo';
import type { Key } from '@/services/getOptions';
import { KeyQuery } from '@/shared/shared-components/dashboardTypes';

export const DashboardCards = ({ query }: { query: KeyQuery }) => {
    let { data } = useSuspenseQuery(getOptions(query as Key));

    if (query === 'stories') {
        data = null;
    }

    if (data && data.isError) {
        throw new Error(data.message);
    }

    if (data) {
        return <DashboardInfo data={data} category={query} />;
    } else {
        return <DashboardStoreInfo category={query} />;
    }
};
