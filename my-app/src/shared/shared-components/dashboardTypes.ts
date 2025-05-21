import { Key } from '@/services/getOptions';
import { QueryData } from './dataTypesFromSQL';

export type KeyQuery = Key | 'stories' | '';

export interface DashboardInitialState {
    popup: 'popup-active' | '';
    query: KeyQuery;
    action: 'change' | 'delete' | 'create';
    idItem: number;
}

export interface IItmeState {
    id: KeyQuery;
    name: string;
    category: 'DB' | 'Store' | 'Request';
}

export interface IListItemsState {
    dbList: IItmeState[];
    storeList: IItmeState[];
    requestList: IItmeState[];
    statisticsSheet: IItmeState[];
}

type Method = 'DELETE' | 'POST' | 'PATCH';

export interface IDashboardFormProp {
    method: Method;
    data?: QueryData;
}
