import { UseQueryResult } from '@tanstack/react-query';
import { QueryData } from '../shared-components/dataTypesFromSQL';

export type Key =
    | 'slidesReviews'
    | 'filters'
    | 'mentors'
    | 'video'
    | 'ratings'
    | 'articles'
    | 'resources';

export type GetData = (key: Key) => {
    process: 'waiting' | 'render';
    getData: UseQueryResult<QueryData, Error>;
};
