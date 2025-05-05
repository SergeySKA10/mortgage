'use client';

import { usePathname } from 'next/navigation';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getOptions } from '../../../services/getOptions';
import setContent from '../../../utils/setContent';
import AuthorCard from '../ui/AuthorCard/AuthorCard';
import { ErrorServerMessage } from '../ui/ErrorMessage/ErrorServerMessage';

export const AuthorInfo = () => {
    const { data } = useSuspenseQuery(getOptions('mentors'));
    const location = usePathname();

    if (data.isError) {
        return (
            <>
                <ErrorServerMessage message={data.message} id="mentors" />
            </>
        );
    }

    const id =
        location === '/ebook'
            ? 'author/book'
            : location === '/webinar'
            ? 'author/webinar'
            : '';

    return (
        <div id={id}>
            {id === 'author/book'
                ? setContent({
                      data: [data[0]],
                      Component: AuthorCard,
                  })
                : id === 'author/webinar'
                ? setContent({
                      data: [data[1]],
                      Component: AuthorCard,
                  })
                : null}
        </div>
    );
};
