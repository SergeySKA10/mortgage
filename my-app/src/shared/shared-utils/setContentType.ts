import type { QueryData } from '@/shared/shared-components/dataTypesFromSQL';
import { JSX } from 'react';

interface ContentProps {
    data: any;
}

// export interface IContent {
//     process: string;
//     isError: boolean;
//     isPending: boolean;
//     Skeleton?: () => JSX.Element | undefined;
//     data: QueryData | undefined;
//     Component: (props: ContentProps) => JSX.Element;
// }

export interface IContent {
    data: QueryData | undefined;
    Component: (props: ContentProps) => JSX.Element;
}
