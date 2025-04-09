'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getOptions } from '@/services/getOptions';
import setContent from '@/utils/setContent';
import RatingCard from '../ui/RatingCard/RatingCard';

export const RatingInfo = () => {
    const { data } = useSuspenseQuery(getOptions('ratings'));

    return <>{setContent({ data: data, Component: RatingCard })}</>;
};
