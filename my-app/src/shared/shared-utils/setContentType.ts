import type { QueryData } from '@/shared/shared-components/dataTypesFromSQL';
import { JSX } from 'react';

interface ContentProps {
    data: any;
    size?: 'videoLarge' | '';
}
export interface IContent {
    process: string;
    isError: boolean;
    isPending: boolean;
    data: QueryData | undefined;
    Component: (props: ContentProps) => JSX.Element;
}
