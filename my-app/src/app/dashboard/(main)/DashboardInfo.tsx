'use client';

import ArticleCard from '@/features/components/ui/ArticleCard/ArticleCard';
import VideoCard from '@/features/components/ui/VideoCard/VideoCard';
import SpeakerCard from '@/features/components/ui/SpeakerCard/SpeakerCard';
import BookCard from '@/features/components/ui/BookCard/BookCard';
import RatingCard from '@/features/components/ui/RatingCard/RatingCard';
import { RequestDashboardCard } from '@/features/components/ui/RequestDashboardCard/RequestDashboardCard';
import { SlideReviews } from '@/features/components/ui/SliderReviews/SliderReviews';
import { ButtonDashboard } from '@/features/components/ui/Buttons/ButtonDashboard';
import { ButtonSendEmail } from '@/features/components/ui/Buttons/ButtonSendEmail';
import { useAppDispatch } from '@/hooks/redux.hooks';
import { setStateQuery } from '../dashboardSlice';

import type { KeyQuery } from '@/shared/shared-components/dashboardTypes';
import type { IRequestDashboardCard } from '@/shared/shared-components/componentsTypes';
import type {
    QueryData,
    ArticlesDB,
    MentorsDB,
    VideoDB,
    RatingsDB,
    BooksOrWebinarsDB,
    IResourcesDB,
    SlidesReviewsDB,
    Data,
} from '@/shared/shared-components/dataTypesFromSQL';

export const DashboardInfo = ({
    data,
    category,
}: {
    data: QueryData;
    category: KeyQuery;
}) => {
    const dispatch = useAppDispatch();

    switch (category) {
        case 'articles':
            setStateQuery(dispatch, 'articles');
            break;
        case 'resources':
            setStateQuery(dispatch, 'resources');
            data = [
                ...(data as IResourcesDB).books,
                ...(data as IResourcesDB).webinars,
            ];
            break;
        case 'mentors':
            setStateQuery(dispatch, 'mentors');
            break;
        case 'video':
            setStateQuery(dispatch, 'video');
            break;
        case 'book':
            setStateQuery(dispatch, 'book');
            break;
        case 'webinar':
            setStateQuery(dispatch, 'webinar');
            break;
        case 'ratings':
            setStateQuery(dispatch, 'ratings');
            break;
        case 'slidesReviews':
            setStateQuery(dispatch, 'slidesReviews');
            break;
        default:
            throw new Error(
                'Category prop incorrect. Props error in DashboardInfo component'
            );
    }

    const content = (data as Data | IRequestDashboardCard[]).map((el) => {
        return (
            <div key={el.id} className="cards-wrapper">
                {category === 'articles' ? (
                    <ArticleCard data={el as ArticlesDB} />
                ) : category === 'mentors' ? (
                    <SpeakerCard data={el as MentorsDB} />
                ) : category === 'video' ? (
                    <VideoCard data={el as VideoDB} />
                ) : category === 'resources' ? (
                    <BookCard data={el as BooksOrWebinarsDB} />
                ) : category === 'slidesReviews' ? (
                    <SlideReviews data={el as SlidesReviewsDB} />
                ) : category === 'ratings' ? (
                    <RatingCard data={el as RatingsDB} />
                ) : category === 'book' ? (
                    <RequestDashboardCard data={el as IRequestDashboardCard} />
                ) : category === 'webinar' ? (
                    <RequestDashboardCard data={el as IRequestDashboardCard} />
                ) : null}

                {category === 'ratings' ? null : category === 'book' ? (
                    <div className="cards-wrapper-btn">
                        <ButtonSendEmail text="Send" />
                    </div>
                ) : category === 'webinar' ? (
                    <div className="cards-wrapper-btn">
                        <ButtonSendEmail text="Send" />
                    </div>
                ) : (
                    <div className="cards-wrapper-btn">
                        {category === 'slidesReviews' ? null : (
                            <ButtonDashboard
                                id={el.id}
                                text="Change"
                                type="mini"
                                action={'change'}
                            />
                        )}

                        <ButtonDashboard
                            id={el.id}
                            text="Delete"
                            type="mini"
                            color="red"
                            action={'delete'}
                        />
                    </div>
                )}
            </div>
        );
    });

    return <>{content}</>;
};
