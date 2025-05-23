import type { QueryData } from '@/shared/shared-components/dataTypesFromSQL';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { JSX } from 'react';

interface ContentProps {
    data: any;
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
}
