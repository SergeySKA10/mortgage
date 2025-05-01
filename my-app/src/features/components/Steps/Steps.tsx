import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/app/lib/getQueryClient';
import { Suspense } from 'react';
import { StepsInfo } from './StepsInfo';
import { SkeletonSteps } from './SkeletonSteps';

import './Steps.scss';
import './StepsMedia.scss';

const Steps = () => {
    // делаем запрос для получения данных
    const queryClient = getQueryClient();

    return (
        <section className="steps">
            <div className="container">
                <div className="steps__wrapper">
                    <Suspense key={'stepsBlock'} fallback={<SkeletonSteps />}>
                        <HydrationBoundary state={dehydrate(queryClient)}>
                            <StepsInfo />
                        </HydrationBoundary>
                    </Suspense>
                </div>
            </div>
        </section>
    );
};

export default Steps;
