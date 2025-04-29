import type { QueryData } from '@/shared/shared-components/dataTypesFromSQL';
import type { SortParametr } from '@/utils/sortByParam';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { JSX } from 'react';

interface ContentProps {
    data: any;
}

interface DataAtr {
    index: number;
    value: 'videoLarge' | 'large' | 'large-right' | '';
}

export interface IContent {
    process?: 'waiting' | 'render' | null;
    isError?: boolean | null;
    isPending?: boolean | null;
    refetch?: (
        options?: RefetchOptions
    ) => Promise<QueryObserverResult<QueryData, Error>>;
    Skeleton?: () => JSX.Element;
    data: QueryData | undefined;
    Component: (props: ContentProps) => JSX.Element;
    sorted?: SortParametr | null;
    dataAtr?: DataAtr[] | null;
    limitContent?: number | null;
}

export type ICreateContent = Pick<
    IContent,
    'data' | 'dataAtr' | 'sorted' | 'limitContent' | 'Component'
>;
