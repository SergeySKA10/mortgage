'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getOptions } from '@/services/getOptions';
import setContent from '@/utils/setContent';
import BookCard from '../ui/BookCard/BookCard';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';
import type { IResourcesDB } from '@/shared/shared-components/dataTypesFromSQL';

export const ResourceInfo = () => {
    const { data } = useSuspenseQuery(getOptions('resources'));

    if (data.isError) {
        return (
            <>
                <ErrorMessage message={data.message} path={'/'} />
            </>
        );
    }

    return (
        <>
            {setContent({
                data: [
                    (data as IResourcesDB).books[0],
                    (data as IResourcesDB).webinars[0],
                ],
                Component: BookCard,
            })}
        </>
    );
};
