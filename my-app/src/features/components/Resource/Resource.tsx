'use client';

import { useState, useEffect, JSX } from 'react';
import useGetData from '../../../services/useGetData';

import type { IResourcesDB } from '@/shared/shared-components/dataTypesFromSQL';

import BookCard from '../ui/BookCard/BookCard';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';

import './Resource.scss';

const Resource = () => {
    const [books, setBooks] = useState<JSX.Element | null>(null);
    const [webinars, setWebinars] = useState<JSX.Element | null>(null);

    const {
        getData: { data, isError, isPending },
    } = useGetData('resources');

    useEffect(() => {
        if (data) {
            setBooks(
                <BookCard
                    key={(data as IResourcesDB).books[0].id}
                    data={(data as IResourcesDB).books[0]}
                />
            );
            setWebinars(
                <BookCard
                    key={(data as IResourcesDB).webinars[0].id}
                    data={(data as IResourcesDB).webinars[0]}
                />
            );
        }
    }, [data]);

    const viewBlock = (
        <>
            {books}
            {webinars}
        </>
    );

    return (
        <div className="article__resources">
            <h2 className="header__h2-left roboto-bold">Resources</h2>
            <div className="article__resources_wrapper">
                {isError ? (
                    <ErrorMessage />
                ) : isPending ? (
                    <div>Loading...</div>
                ) : (
                    viewBlock
                )}
            </div>
        </div>
    );
};

export default Resource;
