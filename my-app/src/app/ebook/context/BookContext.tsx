'use client';

import React, { createContext, useReducer } from 'react';
import { IBookState, IBookContext } from '@/shared/shared-context/book/book';
import { ActionTypes } from './action';
import reducer from './reducer';

interface ProviderProps {
    children: React.ReactNode;
}

const initiaBookState: IBookState = {
    author: '',
    nameBook: '',
    format: [],
    indexActiveFormat: 0,
};

export const BookContext = createContext<IBookContext>({
    author: initiaBookState.author,
    nameBook: initiaBookState.nameBook,
    format: initiaBookState.format,
    indexActiveFormat: initiaBookState.indexActiveFormat,
    setAuthor: (newAuthor: IBookContext['author']) => {},
    setnameBook: (newName: IBookContext['nameBook']) => {},
    setFormat: (newFormat: IBookContext['format']) => {},
    setIndexActiveFormat: (newIndex: IBookContext['indexActiveFormat']) => {},
});

const BookContextProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initiaBookState);

    // контекст который передается в children
    const value = {
        author: state.author,
        nameBook: state.nameBook,
        format: state.format,
        indexActiveFormat: state.indexActiveFormat,
        setAuthor: (newAuthor: IBookContext['author']) => {
            dispatch({ type: ActionTypes.SET_AUTHOR, payload: newAuthor });
        },
        setnameBook: (newName: IBookContext['nameBook']) => {
            dispatch({ type: ActionTypes.SET_NAME_BOOK, payload: newName });
        },
        setFormat: (newFormat: IBookContext['format']) => {
            dispatch({ type: ActionTypes.SET_FORMAT, payload: newFormat });
        },
        setIndexActiveFormat: (newIndex: IBookContext['indexActiveFormat']) => {
            dispatch({ type: ActionTypes.SET_INDEX_ACTIVE, payload: newIndex });
        },
    };

    return (
        <BookContext.Provider value={value}>{children}</BookContext.Provider>
    );
};

export default BookContextProvider;
