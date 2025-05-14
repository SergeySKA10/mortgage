import { Key } from '@/services/getOptions';

export type KeyQuery = Key | 'stories';

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
