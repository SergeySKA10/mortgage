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

    // // формирование отображаемого контента
    // const content = location.pathname === '/blog' ?
    //                 <>
    //                    <h2 className="header__h2-left roboto-bold">Education</h2>
    //                     <div className="blog_education__wrapper">
    //                         {setContent({process, isError, isPending, Components: articlesBlog})}
    //                     </div>
    //                 </>
    //                 : location.pathname === '/secondebook' ?
    //                 <>
    //                     <h2 className="header__h2 roboto-bold">More articles</h2>
    //                     <div className="blog_education__wrapper">
    //                         {setContent({process, isError, isPending, Components: articlesBook})}
    //                     </div>
    //                 </>
    //                 : null;

    // // создаем уникальный идентификатор для секции
    // const id = location.pathname === '/blog' ? 'education/blog'
    // : location.pathname === '/secondebook' ? 'secondbook/articles'
    // : '';

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
