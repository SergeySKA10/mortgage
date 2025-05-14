'use client';

import ArticleCard from '@/features/components/ui/ArticleCard/ArticleCard';
import VideoCard from '@/features/components/ui/VideoCard/VideoCard';
import SpeakerCard from '@/features/components/ui/SpeakerCard/SpeakerCard';
import BookCard from '@/features/components/ui/BookCard/BookCard';
import RatingCard from '@/features/components/ui/RatingCard/RatingCard';
import { RequestDashboardCard } from '@/features/components/ui/RequestDashboardCard/RequestDashboardCard';
import { SlideReviews } from '@/features/components/ui/SliderReviews/SliderReviews';
import { ButtonDashboard } from '@/features/components/ui/Buttons/ButtonDashboard';
import { KeyQuery } from '@/shared/shared-components/dashboardTypes';
import { IRequestDashboardCard } from '@/shared/shared-components/componentsTypes';
import {
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
    if (category === 'resources') {
        data = [
            ...(data as IResourcesDB).books,
            ...(data as IResourcesDB).webinars,
        ];
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
                        <ButtonDashboard
                            text="Send"
                            type="mini"
                            color="grey"
                            action={'send'}
                        />
                    </div>
                ) : category === 'webinar' ? (
                    <div className="cards-wrapper-btn">
                        <ButtonDashboard
                            text="Send"
                            type="mini"
                            color="grey"
                            action={'send'}
                        />
                    </div>
                ) : (
                    <div className="cards-wrapper-btn">
                        {category === 'slidesReviews' ? null : (
                            <ButtonDashboard
                                text="Change"
                                type="mini"
                                action={'change'}
                            />
                        )}

                        <ButtonDashboard
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
