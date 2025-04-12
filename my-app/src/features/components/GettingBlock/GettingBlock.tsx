import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/app/lib/getQueryClient';
import GettingInfo from './GettingInfo';

import './GettingBlock.scss';
import './GettingBlockMedia.scss';
import { Suspense } from 'react';
import { SkeletonGettingBlock } from './SkeletonGettingBlock';

const GettingBlock = () => {
    const queryClient = getQueryClient();

    return (
        <section id="/getting" className="getting">
            <div className="container">
                <h2 tabIndex={0} className="header__h2 roboto-bold">
                    Getting a mortgage funded takes a village.
                </h2>
                <h3 tabIndex={0} className="header__h3 roboto-regular">
                    Well, not quite a village, but two of the villages best
                    lending heroes!
                </h3>

                <div className="getting__speakers">
                    <Suspense
                        key={'mentorsBlock'}
                        fallback={<SkeletonGettingBlock />}
                    >
                        <HydrationBoundary state={dehydrate(queryClient)}>
                            <GettingInfo />
                        </HydrationBoundary>
                    </Suspense>
                </div>
            </div>
        </section>
    );
};

export default GettingBlock;
