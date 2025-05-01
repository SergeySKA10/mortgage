'use client';

import setContent from '@/utils/setContent';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getOptions } from '../../../services/getOptions';
import ArticleCard from '../ui/ArticleCard/ArticleCard';
import { ErrorServerMessage } from '../ui/ErrorMessage/ErrorServerMessage';

export const EducationInfo = () => {
    const { data } = useSuspenseQuery(getOptions('articles'));

    if (data.isError) {
        return (
            <>
                <ErrorServerMessage message={data.message} id={'articles'} />
            </>
        );
    }

    return (
        <>
            {setContent({
                data,
                Component: ArticleCard,
                sorted: 'creation_time',
                dataAtr: [
                    {
                        index: 0,
                        value: 'large',
                    },
                    {
                        index: 6,
                        value: 'large-right',
                    },
                ],
            })}
        </>
    );
};
