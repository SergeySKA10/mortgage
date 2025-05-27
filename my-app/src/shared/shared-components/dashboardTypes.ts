import { Key } from '@/services/getOptions';
import { QueryData } from './dataTypesFromSQL';
import { ISlideStory } from './componentsTypes';
import { Method } from '@/services/usePostData';

export type KeyQuery = Key | 'stories' | '';

export interface DashboardInitialState {
    popup: 'popup-active' | '';
    query: KeyQuery;
    action: 'change' | 'delete' | 'create';
    idItem: string;
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

export interface IDashboardFormProp {
    method: Method;
    data?: QueryData;
    id?: string;
    query: Key;
}

export interface IDashboardFormStoreProp {
    method: 'create' | 'change';
    data?: ISlideStory[];
    id?: string;
}
