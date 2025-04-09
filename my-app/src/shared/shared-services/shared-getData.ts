import { UseQueryResult } from '@tanstack/react-query';
import { QueryData } from '../shared-components/dataTypesFromSQL';

type Key = 'slidesReviews' | 'filters';

export type GetData = (key: Key) => {
    process: 'waiting' | 'render';
    getData: UseQueryResult<QueryData, Error>;
};
