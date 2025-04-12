'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getOptions } from '@/services/getOptions';
import setContent from '@/utils/setContent';
import RatingCard from '../ui/RatingCard/RatingCard';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';

export const RatingInfo = () => {
    const { data } = useSuspenseQuery(getOptions('ratings'));

    if (data.isError) {
        return (
            <>
                <ErrorMessage message={data.message} path={'/'} />
            </>
        );
    }

    return <>{setContent({ data: data, Component: RatingCard })}</>;
};
