'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getOptions } from '@/services/getOptions';
import setContent from '@/utils/setContent';
import RatingCard from '../ui/RatingCard/RatingCard';
import { ErrorServerMessage } from '../ui/ErrorMessage/ErrorServerMessage';

export const RatingInfo = () => {
    const { data } = useSuspenseQuery(getOptions('ratings'));

    if (data.isError) {
        return (
            <>
                <ErrorServerMessage message={data.message} id={'ratings'} />
            </>
        );
    }

    return <>{setContent({ data: data, Component: RatingCard })}</>;
};
