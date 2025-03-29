import { UseQueryResult } from '@tanstack/react-query';
import { QueryData } from '../shared-components/dataTypesFromSQL';

export type GetData = (key: string) => {
    process: string;
    getData: UseQueryResult<QueryData, Error>;
};
