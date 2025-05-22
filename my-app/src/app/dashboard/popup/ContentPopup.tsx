'use client';

import { useAppSelector } from '@/hooks/redux.hooks';
import { useQueryClient } from '@tanstack/react-query';
import { FormDelete } from '@/features/components/ui/FormDashboard/FormDelete';
import { FormBan } from '@/features/components/ui/FormDashboard/FormBan';
import FormArticles from '@/features/components/ui/FormDashboard/FormArticles';
import FormMentors from '@/features/components/ui/FormDashboard/FormMentors';
import FormVideo from '@/features/components/ui/FormDashboard/FormVideoResources';
import FormResource from '@/features/components/ui/FormDashboard/FormResources';
import FormStories from '@/features/components/ui/FormDashboard/FormStories';
import type {
    ArticlesDB,
    MentorsDB,
    VideoDB,
    IResourcesDB,
} from '@/shared/shared-components/dataTypesFromSQL';
import { ISlideStory } from '@/shared/shared-components/componentsTypes';

export const ContentPopup = () => {
    const query = useAppSelector((state) => state.dashboard.query);
    const action = useAppSelector((state) => state.dashboard.action);
    const id = useAppSelector((state) => state.dashboard.idItem);
    const method =
        action === 'create' ? 'POST' : action === 'change' ? 'PATCH' : 'DELETE';
    const queryClient = useQueryClient();
    const data = queryClient.getQueryData([query]);
    const dataStory = useAppSelector((state) => state.sliderStory.slidesStory);

    switch (query) {
        case '':
            if (action === 'delete') {
                return <FormDelete id={id} />;
            } else if (action === 'change') {
                return (
                    <FormArticles
                        data={data as ArticlesDB[]}
                        id={id}
                        method={method}
                    />
                );
            } else {
                return <FormArticles method={method} />;
            }
        case 'articles':
            if (action === 'delete') {
                return <FormDelete id={id} />;
            } else if (action === 'change') {
                return (
                    <FormArticles
                        data={data as ArticlesDB[]}
                        id={id}
                        method={method}
                    />
                );
            } else {
                return <FormArticles method={method} />;
            }
        case 'mentors':
            if (action === 'delete') {
                return <FormDelete id={id} />;
            } else if (action === 'change') {
                return (
                    <FormMentors
                        data={data as MentorsDB[]}
                        id={id}
                        method={method}
                    />
                );
            } else {
                return <FormMentors method={method} />;
            }
        case 'video':
            if (action === 'delete') {
                return <FormDelete id={id} />;
            } else if (action === 'change') {
                return (
                    <FormVideo
                        data={data as VideoDB[]}
                        id={id}
                        method={method}
                    />
                );
            } else {
                return <FormVideo method={method} />;
            }
        case 'resources':
            if (action === 'delete') {
                return <FormDelete id={id} />;
            } else if (action === 'change') {
                return (
                    <FormResource
                        data={data as IResourcesDB}
                        id={id}
                        method={method}
                    />
                );
            } else {
                return <FormResource method={method} />;
            }
        case 'stories':
            if (action === 'delete') {
                return <FormDelete id={id} />;
            } else if (action === 'change') {
                return (
                    <FormStories
                        id={id}
                        data={dataStory as ISlideStory[]}
                        method={action}
                    />
                );
            } else {
                return <FormStories method={action} />;
            }
        case 'slidesReviews':
            if (action === 'delete') {
                return <FormDelete id={id} />;
            } else {
                return (
                    <FormBan text="You can`t create itmes in the reviews section" />
                );
            }
        case 'ratings':
            return (
                <FormBan text="You can`t create itmes in the ratings section" />
            );
        case 'book':
            return (
                <FormBan text="You can`t create itmes in the book section" />
            );
        case 'webinar':
            return (
                <FormBan text="You can`t create itmes in the webinar section" />
            );
        default:
            return (
                <div>
                    Form not found. Query is incorrect in ContentPopup component
                </div>
            );
    }
};
