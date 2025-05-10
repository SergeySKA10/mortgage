import { BookAction } from './action';
import { IBookState } from '@/shared/shared-context/book/book';

export default function reducer(
    state: IBookState,
    action: BookAction
): IBookState {
    switch (action.type) {
        case 'SET_AUTHOR':
            return {
                ...state,
                author: action.payload,
            };
        case 'SET_NAME_BOOK':
            return {
                ...state,
                nameBook: action.payload,
            };
        case 'SET_FORMAT':
            return {
                ...state,
                format: state.format.concat(action.payload),
            };
        case 'SET_INDEX_ACTIVE':
            return {
                ...state,
                indexActiveFormat: action.payload,
            };
        default:
            return state;
    }
}
