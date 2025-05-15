import { fetchOptions } from '@/services/getOptions';
import { DashboardInfo } from './DashboardInfo';
import { DashboardStoreInfo } from './DashboardStoreInfo';
import type { Key } from '@/services/getOptions';
import { KeyQuery } from '@/shared/shared-components/dashboardTypes';
export const DashboardCards = async ({ query }: { query: KeyQuery }) => {
    let data;

    if (query !== 'stories') {
        data = await fetchOptions(query as Key);

        if (data.isError) {
            throw new Error(data.message);
        }
    } else {
        data = null;
    }

    if (data) {
        return <DashboardInfo data={data} category={query} />;
    } else {
        return <DashboardStoreInfo category={query} />;
    }
};
