import { IBookState } from '@/shared/shared-context/book/book';

export const ActionTypes = {
    SET_AUTHOR: 'SET_AUTHOR',
    SET_NAME_BOOK: 'SET_NAME_BOOK',
    SET_FORMAT: 'SET_FORMAT',
    SET_INDEX_ACTIVE: 'SET_INDEX_ACTIVE',
} as const;

export type BookAction =
    | {
          type: (typeof ActionTypes)['SET_AUTHOR'];
          payload: IBookState['author'];
      }
    | {
          type: (typeof ActionTypes)['SET_NAME_BOOK'];
          payload: IBookState['nameBook'];
      }
    | {
          type: (typeof ActionTypes)['SET_FORMAT'];
          payload: IBookState['format'];
      }
    | {
          type: (typeof ActionTypes)['SET_INDEX_ACTIVE'];
          payload: IBookState['indexActiveFormat'];
      };
