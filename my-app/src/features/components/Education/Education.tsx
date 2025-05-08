import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/app/lib/getQueryClient';
import { Suspense } from 'react';
import { EducationInfo } from './EducationInfo';
import { SkeletonEducation } from './SkeletonEducation';

import './Education.scss';
import './EducationMedia.scss';

const Education = () => {
    // делаем запрос для получения данных
    const queryClient = getQueryClient();

    return (
        <section className="blog_education">
            <div className="container">
                <h2 className="header__h2-left roboto-bold">Education</h2>
                <Suspense
                    key={'educationBlog'}
                    fallback={<SkeletonEducation />}
                >
                    <HydrationBoundary state={dehydrate(queryClient)}>
                        <EducationInfo />
                    </HydrationBoundary>
                </Suspense>
            </div>
        </section>
    );
};

export default Education;
