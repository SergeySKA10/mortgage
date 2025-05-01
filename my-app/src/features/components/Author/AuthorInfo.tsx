'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getOptions } from '../../../services/getOptions';
import setContent from '../../../utils/setContent';
import AuthorCard from '../ui/AuthorCard/AuthorCard';
import { ErrorServerMessage } from '../ui/ErrorMessage/ErrorServerMessage';

export const AuthorInfo = () => {
    const { data } = useSuspenseQuery(getOptions('mentors'));

    if (data.isError) {
        return (
            <>
                <ErrorServerMessage message={data.message} id="mentors" />
            </>
        );
    }

    return (
        <>
            {setContent({
                data: [data[0]],
                Component: AuthorCard,
            })}
        </>
    );
};
