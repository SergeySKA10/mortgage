import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/app/lib/getQueryClient';
import { RatingInfo } from './RatingInfo';
import { Suspense } from 'react';
import { RatingSkeleton } from './RatingSkeleton';

import './Rating.scss';

const Rating = () => {
    // делаем запрос для получения данных
    const queryClient = getQueryClient();

    return (
        <Suspense key={'ratingsBlock'} fallback={<RatingSkeleton />}>
            <div tabIndex={0} className="customers__rating">
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <RatingInfo />
                </HydrationBoundary>
            </div>
        </Suspense>
    );
};

export default Rating;
